import { useCart } from './CartContext';

function Payment() {
  const { cartItems } = useCart();

  window.paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
    },

    createOrder: function (data, actions) {
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
      return actions.order.capture().then(function (details) {
        alert('Transaction completed by ' + details.payer.name.given_name + '!');
      });
    },

    onError: function (err) {
      console.log(err);
    },
  });
}

function calculateTotalAmount(cartItems) {
  // Calculate the total amount based on the items in the cart
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return totalAmount;
}

export default Payment;