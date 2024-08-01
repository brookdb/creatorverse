import { Card } from 'react-bootstrap';

export default function Creator() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="creator.imageURL" />
      <Card.Body>
        <Card.Title>creator.name</Card.Title>
        <Card.Text>creator.url</Card.Text>
        <Card.Text>creator.description</Card.Text>
      </Card.Body>
    </Card>
  );
}
