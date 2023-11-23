import { Row, Col, Container } from 'react-bootstrap';

function Overview() {
    return (
        <div className='m-5' style={{ color: 'white', height: '100vh' }}>
            <Container>
                <Row>
                    <Col className='mt-5'>
                        <img src="/design2.png" alt="Overview" />
                    </Col>
                    <Col className='p-2' style={{ fontSize: '30px'}}>
                        <h2>Public safety instant response on the spot help:</h2>
                        <p>
                            A security website/app is a technological solution that is specifically designed to improve security and well-being.
                            Users may experience in various situations. SOS alerts, real-time location sharing with local communities, social-workers, police station etc.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Overview;