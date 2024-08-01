import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../client';

export default function AddCreator() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const payload = {
      name: name,
      imageURL: imageURL,
      url: url,
      description: description,
    };

    console.log(payload);
    const { error } = await supabase.from('creators').insert(payload);
    error ? console.log(error) : navigate('/creators');
  };
  const handleChange = (e) => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : e.target.name === 'url'
      ? setUrl(e.target.value)
      : e.target.name === 'imageURL'
      ? setImageURL(e.target.value)
      : e.target.name === 'description'
      ? setDescription(e.target.value)
      : '';
  };
  return (
    <Container className="creator-page-wrapper">
      <h1>Add a creator</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Creator Info</Form.Label>
          <Row>
            <Col xs={12} sm={6} className="mb-3">
              <Form.Control
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please add a name.
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={6} className="mb-3">
              <Form.Control
                name="imageURL"
                placeholder="Profile Picture"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please add an image URL.
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} className="mb-3">
              <Form.Control
                name="url"
                onChange={handleChange}
                placeholder="Social Links (enter as coma separated list)"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                required
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                rows={3}
              />
              <Form.Control.Feedback type="invalid">
                Please add a description.
              </Form.Control.Feedback>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" style={{ width: '100%' }} type="submit">
          Add New Creator
        </Button>
      </Form>
    </Container>
  );
}
