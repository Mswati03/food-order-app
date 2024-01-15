import React from 'react';
import Navigation from './navigation/navigation';
import { CartProvider } from './navigation/pages/cart/CartContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  const initialOptions = {

    "client-id" : "Abv4Ze_jLICRi1xMmOB1u1UMKXx7FevYLwvXaqDoYA-8AoNFzv9Ka8mM-vKoneHx_lTqVCMEgWhFe_oS",
    currency : "USD",
    intent : "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
    <CartProvider>
      <Navigation/>
    </CartProvider>
    </PayPalScriptProvider>
  );
}

export default App;
