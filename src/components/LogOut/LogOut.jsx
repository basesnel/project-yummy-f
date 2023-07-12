import { Backdrop } from 'components/UserProfile/UserProfile.styled';
import { CancelBtn, Container, LogOutBtn, Wrapper } from './LogOut.styled';

import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export function LogOut({ closeModal }) {
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target.id === 'logOutBackdrop') {
      closeModal();
    }
  };
  // const handleKeyDown = event => {
  //     if (event.key === 'Escape') {
  //         closeModal();
  //     }
  // };

  // useEffect(() => {
  //     if (isOpen) {
  //         window.addEventListener('keydown', handleKeyDown);
  //     }

  //     return () => {
  //         window.removeEventListener('keydown', handleKeyDown);
  //     };
  // }, [isOpen, handleKeyDown]);
  const LogOutElement = (
    <>
      <Backdrop id="logOutBackdrop" onClick={handleBackdropClick}>
        <Container>
          <p>Are you sure you want to log out?</p>
          <Wrapper>
            <LogOutBtn onClick={() => dispatch(logout())}>Log out</LogOutBtn>
            <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
          </Wrapper>
        </Container>
      </Backdrop>
    </>
  );
  return createPortal(LogOutElement, document.getElementById('logout-root'));
}
