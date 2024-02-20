
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PayPalButtons } from "@paypal/react-paypal-js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import React, { useState } from "react";

function PayPal({ items }) {
  const db= firebase.firestore();
  const serverUrl ="http://localhost:8888/"; 
  const auth = getAuth();

  const user = auth.currentUser;
 /* const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    var fetch = require('node-fetch');

     fetch(`${serverUrl}my-server/create-paypal-order`,{
      method: 'POST',
      headers: {
          
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        product:{
          description : "King Size",
          cost: "50"
        },
      }),
  }).then((response) => response.json())
    .then((order) => order.id);


  };
  const onApprove = (data, order) => {
    console.log("ONPPROVE");
     // Order is captured on the server and the response is returned to the browser
     return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
    .then((response) => response.json())
    .then(function(response) {
      return response['orderId'];
    });;
  };*/
  const handleButtonClick = (event) => {
    console.log('PayPal button clicked');
    if(user){
    
      
      const uid = user.uid;;
    
    
    console.log(items);
    console.log(uid);
   db.collection("customers").doc(uid).collection("orders").add({
    items,
   }).then(( docRef)=>{
    const docId= docRef.id;
    console.log(docId);

   }).catch((error) => {
    console.error("Error adding order to Firestore: ", error);
  });

} else{
  alert("error")
return false;
}

  }
  
 // console.log('Ayyooo');
  return (
    <PayPalButtons
      //createOrder={(data) => createOrder(data)}
      //onApprove={(data) => onApprove(data)}
      onClick={() => handleButtonClick()}
    />
  );
}
export default PayPal;