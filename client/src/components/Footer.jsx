import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Container fluid className="footer bg-dark text-white text-center py-5">
            <Row className="mb-4">
                <Col>
                    <a href="/about" className="text-white mx-3 text-decoration-none">About</a>
                    <a href="/contact" className="text-white mx-3 text-decoration-none">Contact</a>
                    <a href="/privacy" className="text-white mx-3 text-decoration-none">Privacy Policy</a>
                    <a href="/terms" className="text-white mx-3 text-decoration-none">Terms of Service</a>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <p className="mb-0">Connect with us on social media:</p>
                    <div>
                        <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className="text-white mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="mb-0">© 2023 Project X</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
