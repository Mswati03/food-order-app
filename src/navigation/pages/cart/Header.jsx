import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../images/LOGO.png";
import "./HeaderStyle.css";
import { useCart } from "../cart/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [nav, setNav] = useState(false);
  const { cart } = useCart();
 const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
window.addEventListener("scroll", changeValueOnScroll);
return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/Dashboard" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" style={{height:100,width:100}} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/Dashboard">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;