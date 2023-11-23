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
    <Navbar
      expand="lg"
      className="py-3 fixed-top"
      style={{
        background: "linear-gradient(90deg, #2C1E4A, #7276AB)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      }}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Shield Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand
          onClick={() => navigate("/")}
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
              onClick={() => navigate("/services")}
              className="mx-3"
              style={{ color: "#D73CBE" }}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/community")}
              className="mx-3"
              style={{ color: "#D73CBE" }}
            >
              Community
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/contact")}
              className="mx-3"
              style={{ color: "#D73CBE" }}
            >
              Contact
            </Nav.Link>
            {user !== null ? (
              <>
                <Nav.Link
                  onClick={() => navigate("/profile")}
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
