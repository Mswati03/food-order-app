import { useCart } from './CartContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function Payment() {
  const { cartItems } = useCart();
  const {db} = firebase.firestore();
window.paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
    },

    createOrder: function (data, actions) {
      db.collection("customersData").add({
        name: 'thabo',
        password: 'thabang'
      });
      console.log("CREATE ORDER");
      const totalAmount = calculateTotalAmount(cartItems);

      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: totalAmount.toFixed(2), // Ensure 2 decimal places
            },
          },
        ],
      });
    },
    

    onApprove: function (data, actions) {


      db.collection("customersData").add({
        name: 'thabo',
        password: 'thabang'
      });
      return actions.order.capture().then(function (details) {
        alert('Transaction completed by ' + details.payer.name.given_name + '!');

        // Store payment information in Firestore
        const paymentData = {
          payerName: details.payer.name.given_name,
          totalAmount: calculateTotalAmount(cartItems).toFixed(2),
          items: cartItems.map(item => ({
            title: item.title,
            quantity: item.quantity,
            price: item.price,
          })),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        };

        db.collection('payments').add(paymentData)
          .then(() => {
            console.log('Payment information stored in Firestore.');
          })
          .catch(error => {
            console.error('Error storing payment information:', error);
          });
      });
    },
    onError: function (err) {
      console.log(err);
    },
  });

 
  

function calculateTotalAmount(cartItems) {
  // Calculate the total amount based on the items in the cart
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return totalAmount;
}

}
export default Payment;