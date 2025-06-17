import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function GlobalNavBar(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          onClick={() => props.setCurrentPage("mainMenu")}
          style={{ cursor: "pointer" }}
        >
          Form Builder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Templates" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => props.setCurrentPage("HP-Promo-btn-1-right")}
              >
                HP-Promo-btn-1-right
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => props.setCurrentPage("HPHero1_4")}
              >
                HP-Hero-1-4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default GlobalNavBar;
