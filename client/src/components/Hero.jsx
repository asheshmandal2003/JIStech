import {Col, Row, Container } from 'react-bootstrap';

function Hero() {
    return (
        <div style={{ color: 'white', height: '100vh' }}>
            <Container>
                <Row>
                    <Col>
                        <h1>AT THE END OF THE DAY, THE GOALS ARE SIMPLE: SAFETY AND SECURITY</h1>
                    </Col>
                    <Col>
                        <img src="/design.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;