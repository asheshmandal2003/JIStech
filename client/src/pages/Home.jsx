import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container fluid className="p-5 mt-5 bg-dark text-white text-center">
                <h1>Welcome to Project X</h1>
                <p>Empowering communities through safety and awareness.</p>
            </Container>

            <Container className="py-5">
                <Row className="feature-cards">
                    <Col md={4}>
                        <Card className="h-100 shadow">
                            <Card.Body>
                                <Card.Title>Real-time Geolocation</Card.Title>
                                <Card.Text>Track your location in real-time for enhanced safety.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 shadow">
                            <Card.Body>
                                <Card.Title>SOS Function</Card.Title>
                                <Card.Text>Send an SOS signal in case of emergencies.</Card.Text>
                                <Button variant="danger" onClick={() => alert('SOS button clicked!')}>SOS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 shadow">
                            <Card.Body>
                                <Card.Title>Community Empowerment</Card.Title>
                                <Card.Text>Join a community of people dedicated to safety and awareness.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;