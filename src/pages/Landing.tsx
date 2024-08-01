import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../components/Elements/logo';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListTile from '../components/Creator/ListTile';
import { AddButton } from '../components/Elements/Badge';

import supabase from '../client';

export default function Landing() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('id,name,imageURL');
      setData(data);
      setError(error);
      error ? console.log(error) : console.log(data);
    };
    getCreators();
  }, []);

  return (
    <>
      <Container className="landing-hero" fluid>
        <Row>
          <Col className="logo" sm={4}>
            <Logo w={100} h={100} fill={'wheat'} />
          </Col>
          <Col sm={8}>
            <h1 className="display-1">Welcome to Creatorverse</h1>
          </Col>
        </Row>
      </Container>
      <Container className="p-5 landing-list">
        <Row>
          <Col className="text-item" sm={5}>
            <h1>Check out these creators</h1>
          </Col>
          {data ? (
            data.map((creator) => (
              <Col className="creator" key={creator.id} sm={6} md={4} lg={3}>
                <Link key={creator.id} to={`/creators/${creator.id}`}>
                  <ListTile
                    key={creator.id}
                    creator={creator}
                    to={`/creators/${creator.id}/edit`}
                  />
                </Link>
              </Col>
            ))
          ) : (
            <h1>Loading ... </h1>
          )}
          <Col className="text-item" sm={5}>
            <h1>Or Add your own</h1>
            <AddButton />
          </Col>
        </Row>
      </Container>
    </>
  );
}
