import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={{ boxShadow: '0 -10px 20px rgba(0,0,0,0.19), 0 -6px 6px rgba(0,0,0,0.23)' }}>
            <div style={{ border: '1px solid #f2f2f2', width: '80%'}}></div>
            <Container fluid className="footer text-center mt-5">
                <Row className="mb-4 p-2">
                    <Col>
                        <h4>About Us</h4>
                        <p>This is a security web application. These apps typically provide a plethora of features aimed at reducing the risks and anxieties that women may experience in various situations.</p>
                    </Col>
                    <Col>
                        <h4>Our Services</h4>
                        <p>HOME</p>
                        <p>ABOUT US.</p>
                        <p>SERVICES</p>
                        <p>FEATURES</p>
                    </Col>
                </Row>
                <Row className="mb-4 p-2">
                    <Col>
                        <h4>Contact Us</h4>
                        <p>+91 3323751495</p>
                        <p>shield321@#gmail.com</p>
                        <p>A-11,Kalyani,West Bengal</p>
                    </Col>
                    <Col>
                        <div style={{ border: '1px solid #f2f2f2', padding: '20px', margin: '20px' }}>
                            <h4>Socials</h4>
                            <div>
                                <a href="#" className="mx-2"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div style={{ border: '1px solid #f2f2f2', padding: '20px', margin: '20px' }}>
                    <Row className="mb-4 p-2">
                        <Col>
                            <p>Copyright 2023 ALL Rights Reserved</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;