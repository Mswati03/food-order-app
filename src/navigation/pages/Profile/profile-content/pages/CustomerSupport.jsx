import React from "react";
import  './CustomerSupport.css';

const CustomerSupport = () =>
{
    function addClass() {

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
             document.body.classList.add("sent");
        }
       

      }
      
    return(
<div>

<div class="wrapper centered">
  <article class="letter">
    <div class="side">
      <h1>Contact us</h1>
      <p>
        <textarea class='contact-input' id='message' placeholder="Your message"></textarea>
      </p>
    </div>
    <div class="side">
      <p>
        <input class='contact-input' id='name'type="text" placeholder="Your name" />
      </p>
      <p>
        <input class='contact-input' id='email' type="email" placeholder="Your email" />
      </p>
      <p>
        <button  id='send-btn'onClick={addClass}>Send</button>
      </p>
    </div>
  </article>
  <div class="envelope front"></div>
  <div class="envelope back"></div>
</div>
<center><p class="result-message centered">Thank you for your message</p></center>
</div>
    );
}
export default CustomerSupport;