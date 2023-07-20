import { COLOR, TRANSITION, SIZE } from 'constants';

import { styled } from 'styled-components';

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  width: 335px;
  padding: 32px 28px 40px 28px;
  border-radius: 30px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: -11px;
    width: 500px;
    padding: 44px 50px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    margin-top: 40px;
  }

  .input__error {
    opacity: 1;
    border: 1px solid ${COLOR.warning};
    svg {
      stroke: ${COLOR.warning};
      opacity: 1;
    }
    &:hover,
    &:focus {
      border: 1px solid ${COLOR.warning};
    }
  }
  .input__valid {
    opacity: 1;
    border: 1px solid #3cbc81;
    svg {
      stroke: #3cbc81;
      opacity: 1;
    }
    &:hover,
    &:focus {
      border: 1px solid #3cbc81;
    }
  }
`;

export const RegisterLabel = styled.p`
  color: ${COLOR.second};
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.167;
  letter-spacing: -0.48px;
  margin-bottom: 40px;
  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 50px;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  border-radius: 6px;
  background: ${COLOR.main};
  padding: 14px 0;
  border: none;
  color: ${COLOR.second};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;
  transition: ${TRANSITION.forHoverColor};

  &:hover,
  &:focus {
    color: ${COLOR.dark};
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 26px;
    padding: 21px 138px;
  }
`;

export const RegisterInput = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  padding-left: 40px;
  color: ${COLOR.second};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  background: transparent;
  border: none;
  border-radius: 6px;
  @media screen and (min-width: ${SIZE.tablet}) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 50px;
    font-size: 18px;
  }
`;

export const RegisterInputWrapper = styled.div`
  position: relative;
  border: 1px solid rgba(250, 250, 250, 0.8);
  border-radius: 6px;
  margin-bottom: 12px;
  transition: ${TRANSITION.forHoverBorderColor}, ${TRANSITION.forHoverOpacity};
  opacity: 0.8;
  svg {
    opacity: 0.8;
    transition: ${TRANSITION.forHoverOpacity}, ${TRANSITION.forHoverStroke};
    stroke: ${COLOR.second};
  }
  &:hover,
  &:focus {
    border: 1px solid rgba(250, 250, 250, 1);
    opacity: 1;
    & svg {
      opacity: 1;
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 24px;
  }
`;

export const RegisterButtonWrapper = styled.div`
  padding-top: 16px;
  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 24px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 24px;
    height: 24px;
    svg {
      width: 24px;
      height: 24px;
    }
    left: 18px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Warning = styled.p`
  position: absolute;
  top: 48px;
  font-size: 8px;
  color: ${COLOR.warning};
  @media screen and (min-width: ${SIZE.tablet}) {
    top: 64px;
    font-size: 12px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    font-size: 14px;
  }
`;
