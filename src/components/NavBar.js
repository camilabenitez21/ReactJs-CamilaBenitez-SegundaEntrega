import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import logo from './img/Candelitte.jpg'; 

function MiNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="60" height="30" className="d-inline-block align-top" /> 
          C A N D E L I T T E
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShowMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className={showMenu ? "show" : ""}>
          <Nav className="me-auto">
            <Nav.Link href="Inicio">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria/ropa">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/zapatos">Zapatos</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ofertas">Ofertas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="Contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MiNavbar;
