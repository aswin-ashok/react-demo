import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";


const styles ={
    outercontainer: {
        background: "#00ae44",
        borderBottom:"1px solid #ffff"
    }
}

const SevenNavbar = () => {
  return (
    <Navbar expand="lg" style={styles.outercontainer}>
      <Container>
        <Navbar.Brand href="#home">
          <img width={80} src="https://www.7up.com/images/7up-logo-large.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Products</Nav.Link>         
            <Nav.Link href="#link">Recipes</Nav.Link>
            <Nav.Link href="#link">stores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SevenNavbar;