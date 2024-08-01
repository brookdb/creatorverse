import { Alert, Button } from 'react-bootstrap';

function AlertBox({ header, message, onSubmit, setShowAlert }) {
  return (
    <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
      <Alert.Heading>{header}</Alert.Heading>
      <p>{message}</p>
      <Button onClick={onSubmit} variant="outline-danger">
        Delete
      </Button>
    </Alert>
  );
}

export default AlertBox;
