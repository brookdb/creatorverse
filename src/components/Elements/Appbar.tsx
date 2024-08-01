import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './logo';

function Appbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <Logo w="20" /> Creatorverse
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" disabled>
              ABOUT
            </Nav.Link>
            <Nav.Link className="nav-link" disabled>
              CONTACT US
            </Nav.Link>
            <Link to={`creators`} className="nav-link">
              CREATORS
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
