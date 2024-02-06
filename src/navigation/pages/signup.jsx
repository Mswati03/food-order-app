import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./sign-up.css";
import {addDoc, collection, getDocs,where, query} from 'firebase/firestore'
import firebase from "firebase/compat/app";
import { ClipLoader } from "react-spinners";
import { LocalAtmSharp } from "@mui/icons-material";

const LoadingWidget = ({ isLoading }) => {
  return (
    <div className={`loading-widget ${isLoading ? 'visible' : ''}`}>
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

 function Signup() {
  
  const db = firebase.firestore();
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dbref = collection(db, "customers")
  const [emailID , setEmailID]= useState("")
  const [passcode, setPassCode] = useState("")
  
  async function handleSubmit(e) {
    e.preventDefault() 
    

    
    setLoading(true);  
    const docRef = await addDoc(collection(db, "customers"), {
      email: emailID,
      password: passcode,
    });
    alert('user registered successfully');
    navigate('/Login');
    
   
   /*const matchEmail = query(dbref, where('email', '==', emailRef))
    try{
      const snapshot = await getDocs(matchEmail)
      const emailMatchingArray = snapshot.docs.map((doc) => doc.data())

      if(emailMatchingArray>1)
      {
        alert("Email ID already exists")
      }
      else{
        await addDoc("customers", { email : emailRef , password: passwordRef})
        navigate("/Login");
      }
    }
    catch(error)
    {
      alert(error);
    }
     
    /*if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    setError("")
    setLoading(true)
      if (await signup(emailRef.current.value, passwordRef.current.value))
      {
        alert("User Registered Successfully :)");
        navigate('/Login');
      }
      else{
        setError("Failed to Sign Up")
      }
      setLoading(false)*/
  }

  return (
    <div id="wrapper">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">INSTANT EATS</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" ref={emailRef} onChange={(e)=>{setEmailID(e.target.value)}} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control type="password" ref={passwordRef} onChange={(e)=>{setPassCode(e.target.value)}}required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>PASSWORD CONFIRMATION</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign up
            </Button>
            
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
     <center> <div id="sign-up-logo">
        <img src="/images/sign-up-logo-removebg.png" alt="sign-up-logo"/>
      </div></center>
      <p className="text-center">2023 Instant Eats © . All Rights Reserved</p>
    </div>
  );
}
export default Signup;