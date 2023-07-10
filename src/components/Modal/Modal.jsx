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
                    <img
                        src={require('../../assets/images/modal/x.svg').default}
                        alt="close"
                    />
                </CloseBtn>
            </TopFrame>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </ModalContainer>
    );
};
