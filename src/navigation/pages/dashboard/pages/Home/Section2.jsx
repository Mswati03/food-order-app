import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Pizza from "../../../../../images/pizza.jpg";
import Salad from "../../../../../images/salad.jpg";
import Delivery from "../../../../../images/deliverybike.jpg";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our recipes and meals are original`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `we ensure that the quality standard is meet in all angles `,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `We have the fastest workforce to deliver your orders on time`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Great moments with family are good but when there is food involved everything becomes extra-ordinary.
                You are yet to be amazed by how low the prices of our burgers are. 
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid rounded"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
