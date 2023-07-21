import {
  ModalContainer,
  TopFrame,
  CloseBtn,
  NavigationContainer,
} from './Modal.styled';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';

export const Modal = ({ closeModal }) => {
  return (
    <ModalContainer>
      <TopFrame>
        <Logo />
        <CloseBtn onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.6663 1.33334L1.33301 14.6667M1.33301 1.33334L14.6663 14.6667"
              stroke="currentColor"
            />
          </svg>
        </CloseBtn>
      </TopFrame>
      <NavigationContainer>
        <Navigation isModal={true} closeModal={closeModal} />
      </NavigationContainer>
    </ModalContainer>
  );
};
