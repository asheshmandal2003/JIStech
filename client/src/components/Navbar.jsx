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
        <Navbar expand="lg" className="py-3 fixed-top" style={{boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Container>
                <Navbar.Brand href="/" className="font-weight-bold text-uppercase" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>Shield</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about" className="mx-3" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>About</Nav.Link>
                        <Nav.Link href="/services" className="mx-3" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>Services</Nav.Link>
                        <Nav.Link href="/community" className="mx-3" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>Community</Nav.Link>
                        <Nav.Link href="/contact" className="mx-3" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>Contact</Nav.Link>
                        {isLoggedIn ? (
                            <>
                                <Nav.Link href="/profile" className="mx-3" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>Profile</Nav.Link>
                                <Nav.Link href="/emergency" className="mx-3" style={{ color: '#D73CBE', fontSize: '1.2rem', fontWeight: 'bold' }}>Emergency</Nav.Link>
                            </>
                        ) : (
                            <Button href="/account" variant="outline-light" className="mx-3" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
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