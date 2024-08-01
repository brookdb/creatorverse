import { Card, Stack } from 'react-bootstrap';
import {
  YouTube,
  Twitter,
  GitHub,
  LinkedIn,
  WebLink,
  EditButton,
  DeleteButton,
} from '../Elements/Badge';
import AlertBox from '../Elements/AlertBox';
import './styles.css';
import { useState } from 'react';
import supabase from '../../client';
import { useNavigate } from 'react-router-dom';
import { classifyLinks } from '../../utills';

export default function DetailTile({ creator }) {
  const [showAlert, setShowAlert] = useState(false);
  //header, message, onSubmit, showAlert
  let header = 'Delete Creator!';
  let message = `Are you sure you want to permanently delete ${creator.name}?`;
  const navigate = useNavigate();

  const socialLinks = classifyLinks(creator.url);
  console.log(socialLinks);
  const sendDeleteQuery = async () => {
    console.log('Sending Deletetion Query ...');
    const response = await supabase
      .from('creators')
      .delete()
      .eq('id', creator.id);
    console.log(response);
    navigate('/creators');
  };

  const handleDeletion = () => {
    console.log(showAlert);
    setShowAlert(true);
    console.log('delete button clicked');
  };
  return showAlert ? (
    <AlertBox
      header={header}
      message={message}
      onSubmit={sendDeleteQuery}
      setShowAlert={setShowAlert}
    />
  ) : (
    <Card className="bg-light text-black p-0 detail-tile ">
      <div className="image-wrapper">
        <Card.Img src={creator.imageURL} alt={creator.name} />
      </div>
      <Card.ImgOverlay>
        <Card.Title className="text-white display-2">{creator.name}</Card.Title>
        {socialLinks && (
          <Stack direction="horizontal" gap={2} className="p-2 social-links">
            {socialLinks.youtube && <YouTube url={socialLinks.youtube} />}
            {socialLinks.twitter && <Twitter url={socialLinks.twitter} />}
            {socialLinks.github && <GitHub url={socialLinks.github} />}
            {socialLinks.linkedin && <LinkedIn url={socialLinks.linkedin} />}
            {socialLinks.other && <WebLink url={socialLinks.other} />}
          </Stack>
        )}
      </Card.ImgOverlay>
      <Card.Text className="p-3 text-start">{creator.description}</Card.Text>
      <Card.Body>
        <Card.Link style={{ width: '100%' }}>
          <div className="list-tile-options">
            <EditButton path={`/creators/${creator.id}/edit`} />
            <DeleteButton handleDeletion={handleDeletion} />
          </div>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
