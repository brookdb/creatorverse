import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import DetailTile from '../components/Creator/DetailTile';
import supabase from '../client';
import './styles.css';

export default function ViewCreator() {
  const p = useParams();
  const id = p.id;
  const [creator, setCreator] = useState();

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('id,name,imageURL,url,description')
        .eq('id', id);
      setCreator(data[0]);
      error ? console.log(error) : console.log(data);
    };
    getCreators();
  }, []);

  return (
    <Container>
      <Row className="creator-details-wrapper p-3 creator-page-wrapper">
        <Col>
          {creator ? <DetailTile creator={creator} /> : <h1>Loading . . .</h1>}
        </Col>
      </Row>
    </Container>
  );
}
