import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../../../../images/promo.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Grab a bite on our wide range of burgers, vegan to meaty
              </p>
              <ul>
                <li>
                  <p>
                    Sauce of your choice
                  </p>
                </li>
                <li>
                  <p>Free pack of chips</p>
                </li>
                <li>
                  <p>
                    get an extra burger for R50 extra, how crazy is that?
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
}

export default Section4;
