import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListTile from '../components/Creator/ListTile';
import SearchBar from '../components/Elements/SearchBar';
import { AddButton } from '../components/Elements/Badge';

import supabase from '../client';
import { filterItems } from '../utills';

export default function ShowCreators() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const [keyword, setKeyword] = useState('');
  function handleChange(e) {
    setKeyword(e.target.value);
  }

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
    <Container className="creator-page-wrapper">
      <Row className="searchbar-wrapper">
        <Col md={9} xs={10}>
          <SearchBar handleChange={handleChange} keyword={keyword} />
        </Col>
        <Col md={3} xs={1}>
          <AddButton />
        </Col>
      </Row>
      <Row>
        {error && <h1>Can't load creators at the moment</h1>}
        {data ? (
          filterItems(data, keyword).map((creator) => (
            <Col key={creator.id} sm={6} md={4} lg={3}>
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
      </Row>
    </Container>
  );
}
