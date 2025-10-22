import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';
import hobbies_data from './hobbies';

const HobbyDetails = () => {
  const { hobbyId } = useParams();
  const hobby = hobbies_data.find(h => h.id === hobbyId);

  if (!hobby) {
    return (
      <Container className="mt-5">
        <Card border="danger" className="text-center shadow-sm">
          <Card.Header as="h3" className="text-danger">Error: Hobby Not Found</Card.Header>
          <Card.Body>
            <Card.Text>
              The hobby you requested with ID **{hobbyId}** does not exist.
            </Card.Text>
            <Button as={Link} to="/hobbies" variant="secondary">
              Go Back to Hobbies List
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  // --- Display Hobby Details ---
  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Img 
          variant="top" 
          src={hobby.imageUrl} 
          alt={hobby.title} 
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        
        <Card.Body>
          <Card.Title as="h1" className="mb-3">{hobby.title}</Card.Title>
          
          <Card.Text className="lead">
            **Details:**
          </Card.Text>
          <Card.Text>
            {hobby.description}
          </Card.Text>
          
          <hr />
          
          <Button as={Link} to="/hobbies" variant="outline-primary">
            &larr; Back to Hobbies
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HobbyDetails;