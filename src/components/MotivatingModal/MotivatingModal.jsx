import { useState } from 'react';
import { useEffect } from 'react';
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

import { ReactComponent as CloseIcon } from '../../assets/images/motivating/close.svg';
const MotivatingModal = () => {
  const [show, setShow] = useState(false);

  const favorite = localStorage.getItem('existFavorite');
  const getNumber = favorite?.length === 1;
  const comparasion = localStorage.getItem('last-session-value');
  const isModal = show || getNumber || parseInt(comparasion) > 100;

  const handleClose = () => setShow(false);

  useEffect(() => {
    const comparasion = localStorage.getItem('last-session-value');
    // const element = document.getElementById('content-modal');
    window.addEventListener('click', function fireOnce() {
      if (fireOnce.onCall) return;
      fireOnce.onCall = true;
      if (parseInt(comparasion) === 100) {
        setShow(true);
      }
      return;
    });
    window.removeEventListener('click', function fireOnce() {
      if (fireOnce.onCall) return;
      fireOnce.onCall = true;
      if (parseInt(comparasion) === 100) {
        setShow(true);
      }
      return;
    });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setShow(false);
      }
    });

    window.removeEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setShow(false);
      }
    });
  }, [setShow]);
  return isModal
    ? ReactDOM.createPortal(
        <Area id="#content-modal" data-toggle="modal">
          <Modal aria-labelledby="contained-modal-title-vcenter">
            <Container>
              <Icon />
              <Text className="text-muted">
                <Information>
                  {comparasion &&
                    'Wow! You have been using the application for 100 days!'}
                  {getNumber &&
                    'Wow! You have added the first recipe to your favorites!'}
                </Information>
              </Text>
              <Button type="button" data-dismiss="modal" onClick={handleClose}>
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
            </Container>
          </Modal>
        </Area>,
        document.getElementById('root')
      )
    : null;
};

export default MotivatingModal;
