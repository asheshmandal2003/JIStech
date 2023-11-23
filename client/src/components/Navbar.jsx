// import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBar({ user }) {
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //   const checkLoginStatus = async () => {
    //     const loggedIn = await isLoggedIn();
    //     setIsLoggedIn(loggedIn);
    //   };
    //   checkLoginStatus();
    // }, []);

    return (
        <Navbar expand="lg" className="py-3 fixed-top" style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Shield Logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand
                    href="/"
                    className="font-weight-bold text-uppercase"
                    style={{ color: "white" }}
                >
                    Shield
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link
                            href="/about"
                            className="mx-3"
                            style={{ color: "#D73CBE" }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="/services"
                            className="mx-3"
                            style={{ color: "#D73CBE" }}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            href="/community"
                            className="mx-3"
                            style={{ color: "#D73CBE" }}
                        >
                            Community
                        </Nav.Link>
                        <Nav.Link
                            href="/contact"
                            className="mx-3"
                            style={{ color: "#D73CBE" }}
                        >
                            Contact
                        </Nav.Link>
                        {user !== null ? (
                            <>
                                <Nav.Link
                                    href="/profile"
                                    className="mx-3"
                                    style={{ color: "#D73CBE" }}
                                >
                                    Profile
                                </Nav.Link>
                                <Nav.Link
                                    href="/emergency"
                                    className="mx-3"
                                    style={{ color: "#D73CBE" }}
                                >
                                    Emergency
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={() => navigate("/auth/signin")}
                                    variant="outline-dark"
                                    className="mx-3"
                                >
                                    Sign In
                                </Button>
                                <Button
                                    onClick={() => navigate("/auth/signup")}
                                    variant="outline-dark"
                                    className="mx-3"
                                >
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
