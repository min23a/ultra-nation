import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';


const Header = () => {
    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/home">Ultra-Nation</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Header;