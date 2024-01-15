import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useCart } from "../../../cart/CartContext";

function Cards({ image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = { image, rating, title, paragraph, price };
    addToCart(product);

  };
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i class="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">R{price}</h5>
            </div>
            <div className="add_to_card">
              
              <Button onClick={handleAddToCart}>              
                Add To Cart
                </Button>

             
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
