import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function component() {
  return (
    <Navbar expand="lg" fixed="top" variant="dark" bg="dark">
      <Container className="d-flex justify-lg-content-center">
        <Navbar.Brand href="#home">MinCheolHong</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-white">
            <Nav.Link href="#AboutMe" active={false}>
              <h5>About Me</h5>
            </Nav.Link>
            <Nav.Link href="#Skills" active={false}>
              <h5>Skills</h5>
            </Nav.Link>
            <Nav.Link href="#Archiving" active={false}>
              <h5>Archiving</h5>
            </Nav.Link>
            <Nav.Link href="#Projects" active={false}>
              <h5>Projects</h5>
            </Nav.Link>
            <NavDropdown title="WebDesign" id="basic-nav-dropdown" menuVariant="dark" style={{ fontSize: '1.25rem' }}>
              <NavDropdown.Item href="#Templates">Template</NavDropdown.Item>
              <NavDropdown.Item href="#Buttons">Butoons</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default component;
