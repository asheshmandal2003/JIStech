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
        formdata.append("name", user.firstName + " " + user.lastName);
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
    <div className="m-5 p-5" style={{ color: "white" }}>
      <Container>
        <Row>
          <Col>
            <Card
              className="h-100 shadow"
              style={{ color: "#2C1E4A", backgroundColor: "white" }}
            >
              <Card.Body>
                <Card.Title className='m-2 p-2' style={{ fontSize: '30px' }}>Secure Data</Card.Title>
                <Card.Text>
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
                <Card.Title style={{ fontSize: '28px' }}>Emergency SOS Alert </Card.Title>
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
                <Card.Title className='m-2 p-2' style={{ fontSize: '30px' }}>24/7 Support</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
