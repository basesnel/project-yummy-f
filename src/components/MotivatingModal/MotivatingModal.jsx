import { useState } from 'react';
import { useFormik } from 'formik';
import styled from './MotivatingModal.module.css';
import { Form, Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

const AddCategories = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {},
    //  async values => {
    //   console.log(values);
    //   await Axios.get('', values);
    // },
  });

  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className={styled.container}
        centered
        show={show}
        onHide={handleClose}
      >
        <Form.Group onSubmit={formik.handleSubmit}>
          <Modal.Body>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form.Group>
      </Modal>
    </div>
  );
};

export default AddCategories;
