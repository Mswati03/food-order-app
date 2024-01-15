import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../../../../images/appstore.png";
import StoreGoogle from "../../../../../images/playstore.png";

import Brand1 from "../../../../../images/kfc.png";
import Brand2 from "../../../../../images/spur.png";
import Brand3 from "../../../../../images/steers.jpg";
import Brand4 from "../../../../../images/chicken-licken.jpg";
import Brand5 from "../../../../../images/barcelos.png";
import Brand6 from "../../../../../images/galitos.jpg";
import Brand7 from "../../../../../images/deboniars.jpg";
import Brand8 from "../../../../../images/mcdonalds.jpg";


function Section5() {
  return (
    <>
      <section className="shop_section">
        
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download the mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Get our free mobile app to order your food right at the comfort of your office or home using your smartphone
              </p>
              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
           
          </Row>
        </Container>
        
      </section>
      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand1} className="img-fluid" alt="brand-1" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand2} className="img-fluid" alt="brand-2" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" style={{Height:225, width:225}}/>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="brand-3" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="brand-4" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="brand-5" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="brand-6" style={{Height:225, width:225}}/>
                    </div>
                    <div className="brand_img">
                      <img src={Brand7} className="img-fluid" alt="brand-7" style={{Height:225, width:225}} />
                    </div>
                    <div className="brand_img">
                      <img src={Brand8} className="img-fluid" alt="brand-8" style={{Height:225, width:225}}/>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
