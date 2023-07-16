import { useState } from 'react';
// import { useFormik } from 'formik';
import styled from './MotivatingModal.module.css';
import { Area, Container, Information } from './MotivatingModal.styled.js';
import { Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import { ReactComponent as CloseIcon } from '../../../assets/images/motivating/closeIcon.svg';
const AddCategories = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <Area>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className={styled.container}
        centered
        show={show}
        // onHide={handleShow}
      >
        <Form.Group>
          <Modal.Body>
            <Form>
              <Container>
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

export default AddCategories;
