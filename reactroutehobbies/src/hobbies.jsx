import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import hobbies_data from './hobbies';

const Hobbies = () => (
  <Container className="mt-5">
    <h1>My Hobbies</h1>
    <p className="lead">List of my favorite hobbies.</p>
    <Row className="g-4 mt-3">
      {hobbies_data.map(hobby => (
        <Col md={6} lg={4} key={hobby.id}>
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={hobby.imageUrl} alt={hobby.title} />
            <Card.Body>
              <Card.Title>{hobby.title}</Card.Title>
              <Card.Text>{hobby.shortDescription}</Card.Text>
              <Button 
                variant="primary" 
                as={Link} 
                to={`/hobbies/${hobby.id}`}
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Hobbies;