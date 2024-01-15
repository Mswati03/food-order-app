import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { useNavigate,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./sign-up.css";


 function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
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
      setLoading(false)
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
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>PASSWORD CONFIRMATION</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
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