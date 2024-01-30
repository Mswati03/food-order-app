// CartPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CartProvider, useCart } from './CartContext';
import Paypal from '../checkout/PayPal';
import { useState } from 'react';
import './cart.css';
import Payment from './app';
import Header from './Header';
import pap from './ap';


function CartPage() {
  const [checkout, setCheckOut] = useState(false);
  const { cart, removeItem} = useCart();

const handleRemoveItem = (index) => {
    removeItem(index);
  };
  const total = cart.reduce((acc, product) => acc + (product.price * (product.quantity || 1)), 0);

  const formatProductToItem = (product) => {
    return {
      name: product.title,
      value: product.price.toFixed(2),
      
    };
  };
  const itemsForPaypal = cart.map(formatProductToItem);
 
  return (
    <CartProvider>
     <Header/>
        <Container id='home-container' >
          <Button className='text-left'>
            <a href="Dashboard" className='pull-left' style={{color:'white'}}> 
             ~Back
            </a>
            </Button>
      <h2>Your Cart</h2>
      <Row>
        {cart.map((product, index) => (
          <Col key={index} md={4}>
            <div>
              <img src={product.image}  className= "rounded"alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.paragraph}</p>
              <div>
                <span>{product.quantity}</span>
                <Button variant="danger" onClick={() => handleRemoveItem(index)}>
                  Remove
                </Button>
              </div>
              <p>Price: R{product.price}</p>
            </div>
          </Col>
        ))}
      </Row>
      <div className='text-center'>
      <p>Total: R{total.toFixed(2)}</p>
      
      </div>  
      
    <div className="text-center">
      {checkout ? (
        <Paypal items={itemsForPaypal}/>
      ) : (
        <Button  class="btn btn-primary"
          onClick={(e) => {
            if(total==0.00)
            {
              alert("You need to add items to be able to checkout!");
              return false;
            } else{
            setCheckOut(true);
            alert("Scroll Below To Select Payment Options");
            <pap/>
            return true;
            }
          }}
        >
          Checkout
        </Button>
        )}
    </div>
    </Container>
    </CartProvider>
    
  );
}

export default CartPage;
