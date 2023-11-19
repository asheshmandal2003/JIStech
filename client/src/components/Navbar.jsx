import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavigationBar() {
    const [navbar, setNavbar] = useState(false);
    const [textColor, setTextColor] = useState('black');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
            setTextColor('white');
        } else {
            setNavbar(false);
            setTextColor('black');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        const checkLoginStatus = async () => {
            const loggedIn = await isLoggedIn();
            setIsLoggedIn(loggedIn);
        };
        checkLoginStatus();
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <Navbar style={{ backgroundColor: navbar ? "#343a40" : "white", color: textColor }} variant="dark" expand="lg" className="py-3 fixed-top">
            <Container>
                <Navbar.Brand href="/" style={{ color: textColor }} className="font-weight-bold text-uppercase">Project X</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about" style={{ color: textColor }} className="mx-3">About</Nav.Link>
                        <Nav.Link href="/services" style={{ color: textColor }} className="mx-3">Services</Nav.Link>
                        <Nav.Link href="/community" style={{ color: textColor }} className="mx-3">Community</Nav.Link>
                        <Nav.Link href="/contact" style={{ color: textColor }} className="mx-3">Contact</Nav.Link>
                        {isLoggedIn ? (
                            <>
                                <Nav.Link href="/profile" style={{ color: textColor }} className="mx-3">Profile</Nav.Link>
                                <Nav.Link href="/emergency" style={{ color: textColor }} className="mx-3">Emergency</Nav.Link>
                            </>
                        ) : (
                                <Button href="/account" variant="outline-dark" className="mx-3" style={{ color: navbar ? 'black' : 'white', backgroundColor: navbar ? 'white' : '#343a40' }}>
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