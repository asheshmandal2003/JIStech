import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
    const isLoggedIn = false;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="/" className="font-weight-bold text-uppercase">Project X</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/about" className="mx-3">About</Nav.Link>
                        <Nav.Link href="/contact" className="mx-3">Contact</Nav.Link>
                        {isLoggedIn ? (
                            <Nav.Link href="/profile" className="mx-3">Profile</Nav.Link>
                        ) : (
                            <Button href="/account" variant="outline-light" className="mx-3">
                                Sign In / Sign Up
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
