import { Card, Col, Row, Container } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Services({ user }) {
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });
  async function sendSOS() {
    navigator.geolocation.getCurrentPosition(
      async (data) => {
        setLocation({
          longitude: data.coords.longitude,
          latitude: data.coords.latitude,
        });
        const formdata = new FormData();
        formdata.append("longitude", location.longitude);
        formdata.append("latitude", location.latitude);
        await axios({
          method: "POST",
          url: `http://localhost:8080/${user._id}/sos`,
          data: formdata,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => alert(res.data))
          .catch((err) => alert(err.message));
      },
      (err) => console.log(err.message)
    );
  }
  return (
    <div className="m-5 p-5" style={{ color: "white", height: "100vh" }}>
      <Container>
        <Row>
          <Col>
            <Card
              className="h-100 shadow"
              style={{ color: "#2C1E4A", backgroundColor: "white" }}
            >
              <Card.Body>
                <Card.Title>Community Empowerment</Card.Title>
                <Card.Text>
                  Join a community of people dedicated to safety and awareness.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="h-100 shadow"
              style={{ color: "#2C1E4A", backgroundColor: "white" }}
            >
              <Card.Body>
                <Card.Title>Emergency SOS Alert </Card.Title>
                {user !== null && (
                  <button className="btn btn-primary" onClick={sendSOS}>
                    Send SOS
                  </button>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="h-100 shadow"
              style={{ color: "#2C1E4A", backgroundColor: "white" }}
            >
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
