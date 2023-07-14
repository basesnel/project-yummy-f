import { TRANSITION } from 'constants';
import { COLOR } from 'constants';
import { styled } from 'styled-components';
import { ReactComponent as UserSvg } from '../../assets/images/userProfile/user.svg';
import { ReactComponent as EditSvg } from '../../assets/images/userProfile/edit.svg';
import { ReactComponent as AvatarSvg } from '../../assets/images/userProfile/user-avatar.svg';
import { ReactComponent as PlusSvg } from '../../assets/images/userProfile/plus.svg';
import { SIZE } from 'constants';

export const Container = styled.div`
  margin: 100px auto;
  position: relative;

  width: 330px;
  padding: 32px 24px;
  border-radius: 24px;
  background: ${COLOR.second};
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 480px;

    padding: 50px 40px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    width: 500px;

    padding: 60px 50px;
  }
`;

export const CloseBtn = styled.button`
  all: unset;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;

  svg {
    width: 20px;
    height: 20px;
    stroke: #333333;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    stroke: ${COLOR.main};
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 24px;
    height: 24px;
    right: 24px;
    top: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 54px;
  align-items: center;
  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 50px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    gap: 52px;
  }
`;
export const AvatarInput = styled.input`
  position: absolute;
  left: 51px;
  top: 70px;
  width: 24px;
  height: 24px;
  opacity: 0;
  @media screen and (min-width: ${SIZE.tablet}) {
    left: 69px;
    top: 81px;
  }
`;
// export const PlusBtn = styled.button`
//   all: unset;
//   position: absolute;
//   left: 51px;
//   top: 70px;
//   width: 24px;
//   height: 24px;
//   transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   &:hover,
//   &:focus {
//     scale: 1.1;
//   }
//   @media screen and (min-width: ${SIZE.tablet}) {
//     left: 69px;
//     top: 81px;
//   }
// `;

export const Input = styled.input`
  height: 49px;
  width: 282px;
  padding-left: 39.5px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  transition: ${TRANSITION.forHoverBorderColor};
  color: #23262a;

  &:hover,
  &:focus {
    border-color: ${COLOR.main};
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    height: 59px;
    width: 400px;
    padding-left: 51px;
  }
  &.input__error {
    border-color: #e74a3b;
  }
`;

export const InputWrapper = styled.label`
  position: relative;
`;

export const UserIcon = styled(UserSvg)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (min-width: ${SIZE.tablet}) {
    height: 24px;
    width: 24px;
    left: 19px;
  }
  stroke: #23262a;
`;

export const EditIcon = styled(EditSvg)`
  position: absolute;
  width: 17px;
  height: 17px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 19px;
    height: 19px;
    right: 19px;
  }
`;

export const InputBtnWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  line-height: 1.29px;

  button {
    height: 49px;
    width: 282px;
    border-radius: 6px;
    border: none;
    background-color: ${COLOR.main};
    color: ${COLOR.second};
    transition: ${TRANSITION.forHoverBgColor};
    &:hover,
    &:focus {
      background-color: ${COLOR.dark};
    }
    @media screen and (min-width: ${SIZE.tablet}) {
      height: 59px;
      width: 400px;
    }
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 32px;
    font-size: 18px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  background-color: #d9d9d9;
  border-radius: 50%;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 103px;
    height: 103px;
  }
`;
export const AvatarImg = styled.img`
  width: 88px;
  height: 88px;

  border-radius: 50%;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 103px;
    height: 103px;
  }
`;
export const AvatarIcon = styled(AvatarSvg)`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 40px;
  height: 40px;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 47px;
    height: 47px;
    top: 28px;
    left: 28px;
  }
`;
export const PlusIcon = styled(PlusSvg)`
  position: absolute;
  left: 51px;
  top: 70px;
  width: 24px;
  height: 24px;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    scale: 1.1;
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    left: 69px;
    top: 81px;
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  overflow-y: auto;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 99;
`;

export const Message = styled.p`
  position: absolute;
  bottom: -10px;
  left: 5px;
  color: #e74a3b;
  font-size: 10px;
`;
