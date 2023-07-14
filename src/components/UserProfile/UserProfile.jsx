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
  Message,
  PlusIcon,
  ProfileForm,
  UserIcon,
} from './UserProfile.styled';
import { ReactComponent as CloseSvg } from '../../assets/images/userProfile/close.svg';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { updateUser } from 'redux/auth/operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required. Please enter your name.')
    .min(3, 'Name should be of minimum 3 characters length')
    .trim(),
});

export function UserProfile({ closeUserProfile, user }) {
  const dispatch = useDispatch();

  const fileInputRef = useRef(null);

  const [object, setObject] = useState(null);

  const [avatar, setAvatar] = useState(null);

  const handleBackdropClick = event => {
    if (event.target.id === 'profileBackdrop') {
      closeUserProfile();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeUserProfile();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeUserProfile]);

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const editAvatar = ({ target }) => {
    const selectedFile = target.files[0];
    const objectURL = URL.createObjectURL(selectedFile);
    setObject(objectURL);
    setAvatar(selectedFile);
    //     URL.revokeObjectURL(objectURL);
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
    },
    validationSchema,

    onSubmit: values => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('avatar', avatar);

      dispatch(updateUser(formData));
      closeUserProfile();
    },
  });

  const UserProfileElement = (
    <>
      <Backdrop id="profileBackdrop" onClick={handleBackdropClick}>
        <Container>
          <CloseBtn onClick={closeUserProfile}>
            <CloseSvg />
          </CloseBtn>
          <ProfileForm
            encType="multipart/form-data"
            onSubmit={formik.handleSubmit}
          >
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={
                    formik.submitCount > 0 &&
                    formik.errors.name &&
                    'input__error'
                  }
                />
                <EditIcon />
                {formik.touched.name && formik.errors.name && (
                  <Message>{formik.errors.name}</Message>
                )}
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
