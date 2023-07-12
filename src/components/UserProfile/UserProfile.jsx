import {
  Avatar,
  //   AvatarIcon,
  AvatarImg,
  AvatarInput,
  Backdrop,
  CloseBtn,
  Container,
  EditIcon,
  Input,
  InputBtnWrapper,
  InputWrapper,
  PlusIcon,
  ProfileForm,
  UserIcon,
} from './UserProfile.styled';
import { ReactComponent as CloseSvg } from '../../assets/images/userProfile/close.svg';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export function UserProfile({
  closeUserProfile,
  user,
  setUserName,
  setAvatarIcon,
}) {
  const fileInputRef = useRef(null);

  const [object, setObject] = useState(null);
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(null);

  const handleBackdropClick = event => {
    if (event.target.id === 'profileBackdrop') {
      closeUserProfile();
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

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const editAvatar = ({ target }) => {
    const selectedFile = target.files[0];
    const objectURL = URL.createObjectURL(selectedFile);
    setObject(objectURL);
    setAvatar(selectedFile);
  };
  const editName = e => {
    setName(e.target.value);
  };
  const editProfile = e => {
    e.preventDefault();
    //     URL.revokeObjectURL(file);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('avatar', avatar);

    const storageData = localStorage.getItem('persist:auth');
    const { token } = JSON.parse(storageData);

    fetch('https://project-yummy-b.onrender.com/users/update-user', {
      method: 'PATCH',

      headers: {
        Authorization: `Bearer ${token.slice(1, -1)}`,
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {})
      .catch(error => {
        // Обробка помилок
      });

    closeUserProfile();
  };

  const UserProfileElement = (
    <>
      <Backdrop id="profileBackdrop" onClick={handleBackdropClick}>
        <Container>
          <CloseBtn onClick={closeUserProfile}>
            <CloseSvg />
          </CloseBtn>
          <ProfileForm encType="multipart/form-data" onSubmit={editProfile}>
            <Avatar>
              {/* <AvatarIcon /> */}
              <AvatarImg src={object ? object : user.avatarURL} />

              <AvatarInput
                type="file"
                ref={fileInputRef}
                onChange={editAvatar}
              />

              {/* <PlusBtn> */}
              <PlusIcon onClick={handleClick} />
              {/* </PlusBtn> */}
            </Avatar>

            <InputBtnWrapper>
              <InputWrapper>
                <UserIcon />
                <Input
                  type="text"
                  id="name-input"
                  name="name"
                  value={name}
                  onChange={editName}
                />
                <EditIcon />
              </InputWrapper>
              <button type="submit">Save changes</button>
            </InputBtnWrapper>
          </ProfileForm>
        </Container>
      </Backdrop>
    </>
  );
  return createPortal(
    UserProfileElement,
    document.getElementById('userprofile-root')
  );
}
