import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Our punctual and resilient staff members and also through the quickest and most reliable transport service
               <b> PickMeUp </b>, your order is assured to be in your hands after 30mins.

               <b>TRY US TODAY</b> 
            </p>
            <Link to="" className="btn btn_red px-4 py-2 rounded-0">
              Call: +266 27000064
            </Link>
            <Link to="/review" className="btn btn_red px-4 py-2 rounded-0">
              Leave a review
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
