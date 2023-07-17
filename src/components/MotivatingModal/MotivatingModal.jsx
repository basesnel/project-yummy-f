import { useState } from 'react';
import {
  Area,
  Container,
  Information,
  Icon,
} from './MotivatingModal.styled.js';
import css from './style.module.css';
import { Form, Modal, Button } from 'react-bootstrap';
import { ReactComponent as CloseIcon } from '../../assets/images/motivating/close.svg';
const MotivatingModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const comparasion = localStorage.getItem('last-session-value');
    console.log(comparasion);
    if (parseInt(comparasion) > 100) {
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
            <Button className={css.button} onClick={handleClose}>
              <CloseIcon
                style={{
                  top: '0px',
                  left: '0px',
                  position: 'absolute',
                  padding: '0px',
                  margin: '0px',
                }}
              />
            </Button>
          </Modal.Footer>
        </Form.Group>
      </Modal>
    </Area>
  );
};

export default MotivatingModal;
