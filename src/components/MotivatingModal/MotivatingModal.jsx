import { useState } from 'react';
import {
  Area,
  Container,
  Information,
  Icon,
} from './MotivatingModal.styled.js';
import { Form, Modal, Button } from 'react-bootstrap';
import { ReactComponent as CloseIcon } from '../../../assets/images/motivating/close.svg';
const MotivatingModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const comparasion = localStorage.getItem('last-session-value');
    console.log(comparasion);
    if (parseInt(comparasion) > 5) {
      setShow(true);
    }
  };

  return (
    <Area onClick={handleShow}>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleShow}
      >
        <Form.Group>
          <Modal.Body>
            <Form>
              <Container>
                <Icon />
                <Form.Text className="text-muted">
                  <Information>
                    Wow! You have been using the application for 100 days!
                  </Information>
                </Form.Text>
              </Container>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Modal.Footer>
        </Form.Group>
      </Modal>
    </Area>
  );
};

export default MotivatingModal;
