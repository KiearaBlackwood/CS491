import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const About = () => (
  <Container className="mt-5">
    <Card className="shadow-sm">
      <Card.Header as="h3">About Me</Card.Header>
      <Card.Body>
        <Card.Title>Kieara</Card.Title>
        <Card.Text>
          I am a undergraduate student at Pace University who is studying computer science.
        </Card.Text>
        <ul>
          <li>Favorite Sport: Formula 1</li>
          <li>Favorite Music Artist: Taylor Swift</li>
        </ul>
      </Card.Body>
    </Card>
  </Container>
);

export default About;