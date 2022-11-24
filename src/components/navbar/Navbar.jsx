import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-auto me-auto">
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}