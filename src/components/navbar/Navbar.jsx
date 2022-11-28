import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ButtonCartNav from "./ButtonCartNav";

export function NavbarComp() {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle className="" aria-controls="navbar" />
        <Nav.Link className="button-cart-container" as={Link} to="/cart">
          <ButtonCartNav />
        </Nav.Link>
        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/form">
              Product Form
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
