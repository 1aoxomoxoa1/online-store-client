import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddedToCartModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Added to Cart!</h4>
        <p>
          Thanks, see your full cart <a href='/cart'> here </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddedToCartModal;