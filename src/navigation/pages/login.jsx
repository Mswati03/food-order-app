import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link,  useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import ReactLoading from "react-loading";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth();
  const [password, setPassCode] = useState("");
  const [email , setEmailID] = useState("");

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  // Signed in 
    const auth = getAuth();
  
    // Pass a reference to delayer function, don't invoke it immediately
    setTimeout(delayer,3000);
  
    function delayer() {
      
          navigate("/Dashboard");
          // Sign-out successful.
        
    }
      
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert ('Failed to Login because of wrong credentials');
  });
     
    
    setLoading(false) 

}
    
    
 
  return (
    <><div id="snackbar" style={{
      position: 'fixed',
      top: 0,
      height: 60,  
    }}>Logged In Successfully</div>
    
      <center><div id="login-logo">
        <img src="/images/login-logo-removebg.png" alt="sign-up-logo"/>
      </div>
      </center>
      <Card id="Card">
        <Card.Body>
          <h2 className="text-center">INSTANT EATS</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group  className="mb-3"id="email" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} onChange={(e)=>{setEmailID(e.target.value)}} required />
            </Form.Group>
            <Form.Group className="mb-3"id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} onChange={(e)=>{setPassCode(e.target.value)}}required />
            </Form.Group>
           <center> <Button disabled={loading} className=" w-50" type="submit">
              Log In
            </Button></center>
          </Form>
          <div id="forgotpass">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-1">
        New User?<Link to="/sign-up">Register here</Link>
      </div>
      </Card>
      <p className="text-center">2023 Instant Eats ©.All Rights Reserved</p>
      
    </>
  )
}