import {
    Avatar,
    AvatarIcon,
    Backdrop,
    CloseBtn,
    Container,
    EditIcon,
    Input,
    InputWrapper,
    PlusBtn,
    PlusIcon,
    ProfileForm,
    UserIcon,
} from './UserProfile.styled';
import { ReactComponent as CloseSvg } from '../../assets/images/userProfile/close.svg';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export function UserProfile() {
    const [isOpen, setIsOpen] = useState(true);
    const closeModal = () => {
        setIsOpen(false);
    };

    const handleBackdropClick = event => {
        if (event.target.id === 'profileBackdrop') {
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
    // }, [isOpen]);

    const UserProfileElement = (
        <>
            {isOpen && (
                <Backdrop id="profileBackdrop" onClick={handleBackdropClick}>
                    <Container>
                        <CloseBtn onClick={closeModal}>
                            <CloseSvg />
                        </CloseBtn>
                        <Avatar>
                            <AvatarIcon />
                            <PlusBtn>
                                <PlusIcon />
                            </PlusBtn>
                        </Avatar>

                        <ProfileForm>
                            <InputWrapper>
                                <UserIcon />
                                <Input
                                    type="text"
                                    id="name-input"
                                    name="name"
                                    value="Olena"
                                />
                                <EditIcon />
                            </InputWrapper>
                            <button type="submit">Save changes</button>
                        </ProfileForm>
                    </Container>
                </Backdrop>
            )}
        </>
    );
    return createPortal(
        UserProfileElement,
        document.getElementById('userprofile-root')
    );
}
