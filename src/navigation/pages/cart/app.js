import { useCart } from './CartContext';
function Payment() {
  const { cartItems } = useCart();
  

  window.paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'blue',
      layout: 'horizontal',
      label: 'paypal',
    },

    createOrder: function (data, actions) {
      const totalAmount = calculateTotalAmount(cartItems);
      console.log("CREATE ORDER");
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
      console.log("APPROVE ORDER");
      return actions.order.capture().then(function (details) {
        alert('Transaction completed by ' + details.payer.name.given_name + '!');
        // Store payment information in Firestore
      });
    },

    onError: function (err) {
      console.log(err);
    },

    onClick: function () {
      console.log("PayPal button pressed");
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