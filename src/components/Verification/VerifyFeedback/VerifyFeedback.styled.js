import { COLOR, SIZE } from 'constants';

import { styled } from 'styled-components';

export const AccessNote = styled.section`
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
    /* margin-top: 40px; */
  }
`;

export const Text = styled.h1`
  color: ${COLOR.second};
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.467;
  letter-spacing: -0.48px;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 50px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  svg {
    width: 72px;
    height: 72px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Warning = styled.p`
  position: absolute;
  top: 65px;
  color: #e74a3b;
`;
