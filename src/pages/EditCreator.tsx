import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../client';
import './styles.css';

export default function EditCreator() {
  const p = useParams();
  const id = p.id;
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [nochange, setNochange] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('id,name,imageURL,url,description')
        .eq('id', id);
      console.log(data[0]);
      if (data[0].id == id) {
        setName(data[0].name);
        setImageURL(data[0].imageURL);
        setUrl(data[0].url);
        setDescription(data[0].description);
      }
      //setCreator(data[0]);
      error ? console.log(error) : console.log(data);
    };
    getCreators();
  }, []);
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
    setNochange(false);
  };

  const handleCreatorUpdate = async (event) => {
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
    const { error } = await supabase
      .from('creators')
      .update(payload)
      .eq('id', id);
    error ? console.log(error) : navigate(`/creators/${id}`);
  };

  return (
    <Container>
      <Row>
        <Col className="p-3 edit-creator creator-page-wrapper">
          <h1>Edit Creator</h1>
          <Form noValidate validated={validated} onSubmit={handleCreatorUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Creator Info</Form.Label>
              <Form.Control
                value={name}
                name="name"
                onChange={handleChange}
                required
              />
              <Form.Control
                value={imageURL}
                name="imageURL"
                onChange={handleChange}
                required
              />
              <Form.Control
                as="textarea"
                required
                type="text"
                name="description"
                value={description}
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Social Links</Form.Label>
              <Form.Control value={url} name="url" onChange={handleChange} />
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: '100%' }}
              type="submit"
              disabled={nochange}
            >
              Update Creator
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
