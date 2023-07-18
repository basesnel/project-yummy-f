import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Area,
  Container,
  Information,
  Icon,
  Button,
  Text,
  Modal,
} from './MotivatingModal.styled.js';
import css from './style.module.css';

import { ReactComponent as CloseIcon } from '../../assets/images/motivating/close.svg';
const MotivatingModal = () => {
  const [show, setShow] = useState(false);

  const comparasion = localStorage.getItem('last-session-value');
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const comparasion = localStorage.getItem('last-session-value');
    console.log(comparasion);
    if (parseInt(comparasion) > 5) {
      setShow(true);
    }
  };
  // <script>
  //             const comparasion = localStorage.getItem('last-session-value');
  //           $(window).on('shown.bs.modal', function(comparasion) {
  //               if(parsInt(comparasion)) {
  //                   $('#iform').modal('show');
  //               }
  //             return
  //         });
  //            </script>

  return comparasion.open
    ? ReactDOM.createPortal(
        <Area id="content-modal" onClick={handleShow}>
          <Modal
            aria-labelledby="contained-modal-title-vcenter"
            show={show}
            id="#iform"
          >
            <Container>
              <Icon />
              <Text className="text-muted">
                <Information>
                  Wow! You have been using the application for 100 days!
                </Information>
              </Text>
            </Container>
            <Button type="reset" className={css.button} onClick={handleClose}>
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
          </Modal>
        </Area>,
        document.getElementById('#root')
      )
    : null;
};

export default MotivatingModal;
