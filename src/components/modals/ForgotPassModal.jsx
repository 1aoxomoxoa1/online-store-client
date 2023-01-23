import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { sendToEmail } from '../../api/login';

function ForgotPassModal(props) {

  const [sentMsg, setSentMsg] = useState(true);
  const [emailFound, setEmailFound] = useState(false);


  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Email sent to reset your password!</h4>
        <form> 
            <label htmlFor="email" style={{marginRight: "20px"}}>Enter the email you will retrieve password of: </label>
            <br/>
            <input type="text" name="email" id="email"/>
            <br /> 
            <br />
            {emailFound === true
            ?  <p hidden={sentMsg}> Sent, check your inbox
            </p>
            :<p hidden={sentMsg}> Email not found
            </p>
            }
           
            <Button type="submit" onClick={(event) => sendToEmail(event, setSentMsg, setEmailFound)}> Send To Email </Button>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ForgotPassModal;