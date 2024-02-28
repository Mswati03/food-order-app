import React from 'react';
import "./AccountSettings.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const AccountSettings = () => {
    const form = useRef();
    const navigate= useNavigate();
    const db = firebase.firestore();
    const auth = getAuth();
    const user = auth.currentUser;
    

    const handleonClick = (e) => {
       
    const uid = user.uid;
    var name = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var email = document.getElementById('inputEmail4').value;
    var option = document.getElementById('inputState5').value;
    var address = document.getElementById('inputAddress5').value;
    var zip = document.getElementById('inputZip5').value;

    console.log(name);
 e.preventDefault();
 db.collection("customers").doc(uid).set({
    firstname : name,
    lastname : lname,
    email : email,
    district : option,
    address : address,
    zip : zip,
   }).then(( docRef)=>{
    const docId= docRef.id;
    console.log(docId);

   }).catch((error) => {
    console.error("Error adding order to Firestore: ", error);
  });

    }

  return (
    <div class="container">
<div class="row justify-content-center">
    <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <h2 class="h3 mb-4 page-title">Settings</h2>
        <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Profile</a>
                </li>
            </ul>
            <form ref={form}>
                
                <hr class="my-4" />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstname">Firstname</label>
                        <input type="text" id="firstname" class="form-control" name="fname"placeholder="Thabang" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastname">Lastname</label>
                        <input type="text" id="lastname" class="form-control" name="lname"placeholder="Jasmine" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"name="email" placeholder="thabangjasmine@icloud.com" />
                </div>
                <div class="form-group col-md-4">
                        <label for="inputState5">District</label>
                        <select id="inputState5" class="form-control">
                            <option selected="">Choose...</option>
                            <option>Maseru</option>
                            <option>Mafeteng</option>
                            <option>Berea</option>
                            <option>Leribe</option>
                            <option>Botha Bothe</option>
                            <option>Mohale's Hoek</option>
                            <option>Qacha's Nek</option>
                            <option>Mokhotlong</option>
                            <option>Quthing</option>
                        </select>
                    </div>
                
                <div class="form-row">
                    <div class="form-group">
                    <label for="inputAddress5">Address</label>
                    <input type="text" class="form-control" id="inputAddress5" name="address" placeholder="P.O. Box 464" />
                </div>
                    
                    <div class="form-group col-md-2">
                        <label for="inputZip5">Zip</label>
                        <input type="text" class="form-control" id="inputZip5" placeholder="100"/>
                    </div>
                </div>
                <button type="submit" onClick={handleonClick} class="btn btn-primary">Save Change</button>
                <hr class="my-4" />
                <div class="row mb-4">
                    <div class="col-md-6">
                        <p>To create a new password of your account, press on the button below</p><br/>
                        <Button variant='danger' onClick={()=>{
                        navigate('/forgot-password');
                        }}>
                            Reset Password</Button>
                    </div>
                    <div class="col-md-6">
                        <b><p class="mb-2">Remember the password requirements</p></b>
                        <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                        <ul class="small text-muted pl-4 mb-0">
                            <li>Minimum 8 character</li>
                            <li>At least one special character</li>
                            <li>At least one number</li>
                            <li>Can’t be the same as a previous password</li>
                        </ul>
                    </div>
                </div>
              
            </form>
        </div>
    </div>
</div>

</div>
    
  );
};

export default AccountSettings;