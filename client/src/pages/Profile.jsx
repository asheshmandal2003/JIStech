import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Profile = ({ user = {}, handleLogout = () => { } }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <Row className="justify-content-md-center text-center mb-4">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Profile Page</Card.Title>
                            <Card.Text>Welcome, {user.name}!</Card.Text>
                            <Card.Text>Email: {user.email}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control name="name" defaultValue={user.name} ref={register({ required: true })} />
                            {errors.name && <p>This field is required</p>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control name="email" defaultValue={user.email} ref={register({ required: true })} />
                            {errors.email && <p>This field is required</p>}
                        </Form.Group>

                        <Button variant="primary" type="submit">Update Profile</Button>
                    </Form>
                </Col>
            </Row>

            <Row className="justify-content-md-center text-center mt-4">
                <Col md={8}>
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </Col>
            </Row>
        </Container>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    handleLogout: PropTypes.func,
};

export default Profile;