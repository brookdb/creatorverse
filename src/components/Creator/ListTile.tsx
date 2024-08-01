import './styles.css';
import { Card } from 'react-bootstrap';

export default function ListTile({ creator }) {
  return (
    <Card className="list-tile">
      <Card.Body>
        <div className="image-wrapper">
          <Card.Img src={creator.imageURL} />
        </div>
        <Card.Title className="display-5">{creator.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
