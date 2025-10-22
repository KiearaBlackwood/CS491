import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = () => (
  <Container className="text-center mt-5">
    <Row className="justify-content-md-center">
      <Col md={8}>
        <h1>Welcome Home!</h1>
        <p className="lead">
        </p>
        <Image 
          src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM" 
          fluid 
          rounded 
          className="mt-3 shadow" 
          alt="image of sky"
        />
      </Col>
    </Row>
  </Container>
);

export default Home;