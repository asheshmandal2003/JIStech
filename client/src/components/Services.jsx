import { Card, Col, Row, Container } from 'react-bootstrap';

function Services() {
    return (
        <div className="m-5 p-5" style={{ color: 'white', height: '100vh',  }}>
            <Container>
                <Row>
                    <Col>
                        <Card className="h-100 shadow" style={{ color: '#2C1E4A', backgroundColor: 'white' }}>
                            <Card.Body>
                                <Card.Title>Community Empowerment</Card.Title>
                                <Card.Text>Join a community of people dedicated to safety and awareness.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 shadow" style={{ color: '#2C1E4A', backgroundColor: 'white' }}>
                            <Card.Body>
                                <Card.Title>Emergency SOS Alert </Card.Title>
                                <button>Learn More </button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100 shadow" style={{ color: '#2C1E4A', backgroundColor: 'white' }}>
                            <Card.Body>
                                <Card.Title>Card Title 3</Card.Title>
                                <Card.Text>Card Text 3</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Services;