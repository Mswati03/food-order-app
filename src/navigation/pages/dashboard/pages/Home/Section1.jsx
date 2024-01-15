import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Burger from "../../../../../images/burger8.jpg";
import MegaSale from "../../../../../images/megasale.png";


const Section1 = () => {

  const scrollToBottom = () => {
    const windowHeight = window.innerHeight
    window.scrollTo(0, windowHeight)
  }
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="rounded"  alt="Hero" />
              <div className="price_badge">
                
              <img src={MegaSale} className="img-fluid" style={{height:200,width:900,position:"relative",}}alt="big_sale"/>
                
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion and Beef</h2>
              <p className="text-white pt-2 pb-4">
                Grab a bite and enjoy the mouthwatering flavours instilled into our limited special burger
              </p>
              <Button onClick={scrollToBottom}>
               About Our Burgers
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
