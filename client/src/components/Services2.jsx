import { Col, Row, Container } from "react-bootstrap";
// import { useState } from "react";

function Services2() {
    return (
        <div className="mt-5 mb-5" style={{ color: "white", height: "300vh" }}>
            <Container>
                <Row className="m-5 p-5 d-flex justify-content-between">
                    <Col md={5} style={{ border: '1px solid white'}}>
                        <h2 className='mb-4 mt-3 p-3' style={{ fontSize: '35px' }}>100% Secured Data</h2>
                        <p className='m-2 p-5' style={{ fontSize: '20px' }}>
                            This is an innovative platform employs proximity-based technology   to  create  apowerful  safety network,while
                            maintaining   a  commitment   to  privacy  and  security.
                        </p>
                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                        <img src="/service1.avif" alt="Services" className="img-fluid rounded-circle m-3" />
                    </Col>
                </Row>
                <Row className="m-5 p-5 d-flex justify-content-between">
                    <Col md={5} style={{ border: '1px solid white'}}>
                        <h2 className='mb-4 mt-3 p-3' style={{ fontSize: '35px' }}>Emergency SOS Alert</h2>
                        <p className='m-2 p-4' style={{ fontSize: '20px' }}>
                            Our project include a proactive Emergency SOS Ststem, enabling  users  to  signal  distress to nearby registered individuals,  local  communities , law  enforcement  and
                            non-governmental organizations.
                        </p>
                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                        <img src="/service2.avif" alt="Services" className="img-fluid rounded-circle m-3" />
                    </Col>
                </Row>
                <Row className="m-5 p-5 d-flex justify-content-between">
                    <Col md={5} style={{ border: '1px solid white'}}>
                        <h2 className='mb-4 mt-3 p-3' style={{ fontSize: '35px' }}>24/7 Customer Support</h2>
                        <p className='m-2 p-3' style={{ fontSize: '20px' }}>
                            Experience peace of mind with our dedicated 24/7 customer support. Our team is always ready to assist you, ensuring prompt and reliable help whenever you need it. 
                            Whether you have questions, encounter issues, or simply seek guidance, our support is here for you around the clock.
                        </p>
                    </Col>
                    <Col md={5} className="d-flex justify-content-center">
                        <img src="/service3.avif" alt="Services" className="img-fluid rounded-circle m-3" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services2