import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Please Log In!</h4>
        <p>
          You can't add to wishlist without being logged in! Please login in <a href='/profile'> here </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;