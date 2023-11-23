import {Col, Row, Container } from 'react-bootstrap';

function Hero() {
    return (
        <div className='m-5' style={{ color: 'white', height: '100vh' }}>
            <Container>
                <Row>
                    <Col>
                        <h1 className='m-5 p-5' style={{ fontSize: '42px'}}>AT THE END OF THE DAY, THE GOALS ARE SIMPLE: SAFETY AND SECURITY</h1>
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