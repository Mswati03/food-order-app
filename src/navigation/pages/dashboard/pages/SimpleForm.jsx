import React, { Component, useState } from 'react'
import ChatBot from 'react-simple-chatbot';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";


const  SimpleForm = () => {
    const [response, setResponse] = useState('');
    const db = firebase.firestore();
    const auth = getAuth();
    const user = auth.currentUser;
    const steps = [
        {
            id: '1',
            message: 'Leave a review',
            trigger: '3'
        },
        {
            id: '2',
            
             message: 'Thank you for your review',
            end: true
        },
        {
            id: '3',
           user: true,
           trigger: '2',
           validator: (value) => {
            if (value=='') {
              return 'value should be a number';
            }
            setResponse(value);
           
            return true;
          },
            
        }
       
    ];
    const [review, setReview] = useState('');

    const handleUserInput = (e) => {
        console.log('User input received:', value); // Log user input
        setReview(e.target.value);
    }
    const uid = user.uid;
    console.log(response);  // Log current review state
    db.collection("reviews").doc(uid).set({
        message : response
       }).then(( docRef)=>{
        const docId= docRef.id;
        console.log(docId);
    
       }).catch((error) => {
        console.error("Error adding order to Firestore: ", error);
      });
    
    return (
        <div>
            <ChatBot
                headerTitle="Instant Eats Reviews"
                steps={steps}
                floating = {true}
                userInput={handleUserInput} // Pass the function to handle user input
                handleEnd={() => console.log('Chatbot ended')}
           
           /> 
           
        </div>
    );
}
export default SimpleForm;
