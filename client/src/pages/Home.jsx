import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="p-0">
      <div className="hero-section bg-light text-center py-5">
        <h1 className="display-4">Welcome to Our Application</h1>
        <p className="lead">
          Providing safety and security with real-time geolocation services and
          an SOS function for emergencies.
        </p>
      </div>

      <Row className="feature-cards py-5">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Real-time Geolocation</Card.Title>
              <Card.Text>
                Track your location in real-time for enhanced safety.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>SOS Function</Card.Title>
              <Card.Text>Send an SOS signal in case of emergencies.</Card.Text>
              <Button
                variant="danger"
                onClick={() =>
                  navigator.geolocation.getCurrentPosition((position) =>
                    console.log(position.coords)
                  )
                }
              >
                SOS
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Community Empowerment</Card.Title>
              <Card.Text>
                Share information with the community for collective safety.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
