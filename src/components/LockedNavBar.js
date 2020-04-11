import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'



function LockedNavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Password Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}




export default LockedNavBar
