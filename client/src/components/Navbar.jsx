import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavigationBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await isLoggedIn();
            setIsLoggedIn(loggedIn);
        };
        checkLoginStatus();
    }, []);

    return (
        <Navbar expand="lg" className="py-3 fixed-top">
            <Container>
                <Navbar.Brand href="/" className="font-weight-bold text-uppercase" style={{ color: '#D73CBE' }}>Shield</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about" className="mx-3" style={{ color: '#D73CBE' }}>About</Nav.Link>
                        <Nav.Link href="/services" className="mx-3" style={{ color: '#D73CBE' }}>Services</Nav.Link>
                        <Nav.Link href="/community" className="mx-3" style={{ color: '#D73CBE' }}>Community</Nav.Link>
                        <Nav.Link href="/contact" className="mx-3" style={{ color: '#D73CBE' }}>Contact</Nav.Link>
                        {isLoggedIn ? (
                            <>
                                <Nav.Link href="/profile" className="mx-3" style={{ color: '#D73CBE' }}>Profile</Nav.Link>
                                <Nav.Link href="/emergency" className="mx-3" style={{ color: '#D73CBE' }}>Emergency</Nav.Link>
                            </>
                        ) : (
                            <Button href="/account" variant="outline-dark" className="mx-3">
                                Sign In / Sign Up
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;