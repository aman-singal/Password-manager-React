import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'



function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Password Manager</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/add">Add</Nav.Link>
      <Nav.Link href="/view">View</Nav.Link>
      <Nav.Link href="/edit">Edit</Nav.Link>
      <Nav.Link href="/signout">Signout</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default React.memo(NavBar)
