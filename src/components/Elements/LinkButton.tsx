import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function LinkButton({ to, children, variant, external }) {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path, { relative: 'path' });
  }
  return external ? (
    <a href={to} target="_blank">
      <Button variant={variant}>{children}</Button>
    </a>
  ) : (
    <Button variant={variant} onClick={() => handleClick(to)}>
      {children}
    </Button>
  );
}
