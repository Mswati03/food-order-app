import React from "react";
import  './CustomerSupport.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const CustomerSupport = () =>
{const form = useRef();
  const db = firebase.firestore();
  const auth = getAuth();
 
  const user = auth.currentUser;
  const uid = user.uid;
    function AddClass(e) {
      e.preventDefault();
      
        var name=document.getElementById('name').value;
        var message = document.getElementById('message').value;
        var email=document.getElementById('email').value;
        if(message==='')
        {
         alert('Provide your message');
         return false;
        }else if (name==='')
        {
            alert('Provide your name');
            return false;
        }
        else if (email==='')
        {
            alert('Provide your email');
            return false;
        }
        else{
            /* document.body.classList.add("sent");
             db.collection("feedback").doc(uid).set({
              message : message,
              name : name,
              email : email,
             }).then(( docRef)=>{
              const docId= docRef.id;
              console.log(docId);
          
             }).catch((error) => {
              console.error("Error adding order to Firestore: ", error);
            });
          */
             
            const serviceId = "service_c5lhvu9";
            const templateId = "template_6dxu3pk";
            try {
             
              emailjs.sendForm(serviceId, templateId, form.current, 'eO9nmDLgDLPCoywzb')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
             
              document.body.classList.add("sent");
          }
              
             catch (error) {
              console.log(error);
            }  
            
        }
       

      }
      
    return(<>
      


<div class="wrapper centered">
  <article class="letter">
    <form ref={form}>
      <div class="side">
      <h1>Contact us</h1>
      <p>
        <textarea class='contact-input' id='message' name='message' placeholder="Your message"></textarea>
      </p>
    </div>
    <div class="side">
      <p>
        <input class='contact-input' id='name'type="text" name="name" placeholder="Your name" />
      </p>
      <p>
        <input class='contact-input' id='email' type="email" name="email" placeholder="Your email" />
      </p>
      <p>
        <button  id='send-btn'onClick={AddClass}>Send</button>
      </p>
    </div>
    </form>
  </article>
  <div class="envelope front"></div>
  <div class="envelope back"></div>
</div>

<center><p class="result-message centered">Thank you for your message</p></center>

</>
    );
}
export default CustomerSupport;