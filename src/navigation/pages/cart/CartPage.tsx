// CartPage.js
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../../../CartState/store.ts';
import { decrement , increment} from '../../../CartState/Counter/CounterSlice.ts';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CartProvider, useCart } from './CartContext';
import Paypal from '../checkout/PayPal';
import { useState } from 'react';
import './cart.css';
import Payment from './app';
import Header from './Header';

import { useEffect } from 'react';
import { Delete, Garage, Remove } from '@mui/icons-material';


function CartPage() {
  const [checkout, setCheckOut] = useState(false);
  const { cart, removeItem} = useCart();
  var [date,setDate] = useState(new Date());
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

const handleRemoveItem = (index) => {
    removeItem(index);
  };
  const total = cart.reduce((acc, product) => acc + (product.price * count * (product.quantity || 1)), 0);

  const formatProductToItem = (product) => {
    return {
      dateoforder : date.toLocaleDateString(),
      count : count,
      name: product.title,
      unit_amount :{
        value: product.price.toFixed(2),
        currency_code : "USD",
        
      },
      total : total,

      
      
    };
  };
  const itemsForPaypal = cart.map(formatProductToItem);
 
  return (
    <CartProvider>
     <Header/>
        <Container id='home-container' >
          
      <h2>Your Cart</h2>
      <Row>
        {cart.map((product, index) => (
          
          <Col key={index} md={3}>
            <div>
             <img src={product.image} id='cart-image' className= "rounded"alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.paragraph}</p>
              <div><br/>
              Qty:{' '} <span>{count}</span> {' '}unit(s)<br/>

      
             
              <Button onClick={() => 
                { if(count>1)
                  {
                     dispatch(decrement());
                     if(count==1){
                      handleRemoveItem(index);
                     }
                     else{
                      return false;
                     }
                  }
                 else{
                  return false;
                 }
                  }
                }>-</Button> {' '}
                <Button onClick={() => dispatch(increment())}>+</Button>
      
      {' '}<br/><Button variant="danger" onClick={() => handleRemoveItem(index)}>
                  <Delete/>
                </Button>
              </div>
              <p>Price: R{(product.price * count).toFixed(2)}</p>
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
        <Button  className="btn btn-primary"
          onClick={(e) => {
            if(total==0.00)
            {
              alert("You need to add items to be able to checkout!");
              return false;
            } else{
            setCheckOut(true);
            alert("Scroll Below To Select Payment Options");
            //<pap/>
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
