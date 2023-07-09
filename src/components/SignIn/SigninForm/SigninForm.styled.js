import { styled } from 'styled-components';

export const FormSignin = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  width: 335px;
  padding: 32px 28px 40px 28px;
  border-radius: 30px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
  @media screen and (min-width: 375px) {
    margin-top: -11px;
    width: 500px;
    padding: 44px 50px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const SigninLabel = styled.label`
  color: #fafafa;
  //   font-family: Poppins;
  font-size: 24px;

  font-weight: 600;
  line-height: 1.167;
  letter-spacing: -0.48px;
  margin-bottom: 40px;
  @media screen and (min-width: 375px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 50px;
  }
`;

export const SigninButton = styled.button`
  border-radius: 6px;
  background: #8baa36;
  padding: 14px 110px;
  border: none;
  color: #fafafa;
  text-align: center;
  //   font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;
  margin-top: 16px;
  @media screen and (min-width: 375px) {
    margin-top: 26px;
    padding: 21px 138px;
  }
`;

export const SigninInput = styled.input`
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  padding-left: 40px;
  color: #fafafa;
  //   font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  background: #2a2c36;
  border: 1px solid #fafafa;
  border-radius: 6px;
  @media screen and (min-width: 375px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 50px;
    font-size: 18px;
  }
`;

export const SigninInputWrapper = styled.div`
  position: relative;

  margin-bottom: 12px;
  @media screen and (min-width: 375px) {
    margin-bottom: 24px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);

  @media screen and (min-width: 375px) {
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
