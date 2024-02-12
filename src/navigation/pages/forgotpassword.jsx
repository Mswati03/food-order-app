import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import { Link } from "react-router-dom"
import "./forgotpass.css"

export default function ForgotPassword(){
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
     <div id="forgotp">
      <Card id="Card">
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/Login">Login</Link>
          </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/sign-up">Sign Up</Link>
      </div>
      </Card>
      <center>
      <div id="img-forgotp">
      <img src="/images/forgot-pass-logo.png" alt="forgot-pass"/>
      </div>
      <p className="text-center">2023 Instant Eats ©.All Rights Reserved</p>
      </center>
      </div>
  );
}