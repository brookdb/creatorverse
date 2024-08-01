import { Container, Row, Col } from 'react-bootstrap';
import { Heart } from './Badge';
import './styles.css';
export default function Footer() {
  return (
    <Container className="p-2 footer text-center" fluid>
      <Row className="p-4">
        <Col sm={6}>
          <h3>Creatorverse</h3>
        </Col>
        <Col sm={6}>
          <p>
            Made with <Heart /> in Baltimore
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Designed by <a href="https://www.brookdaba.com">Brook Daba</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
