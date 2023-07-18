import { SIZE } from 'constants';
import { styled } from 'styled-components';
import { ReactComponent as mobile1x } from 'assets/images/motivating/background/mobile1x.svg';

export const Area = styled.section`
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  flex-direction: column;
  margin-left: 14px;
  @media only screen and (min-width: ${SIZE.mobile}) {
    flex-direction: row;
  }
  @media only screen and (min-width: ${SIZE.tablet}) {
    letter-spacing: -0.24px;
  }
  @media only screen and (min-width: ${SIZE.desktop}) {
    margin: 33.5px 0 0 0;
  }
`;

export const Icon = styled(mobile1x)`
  display: block;

  @media only screen and (min-width: ${SIZE.mobile}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 268px;
    height: 242px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    width: 268px;
    height: 242px;
  }
`;
export const Container = styled.div`
  position: relative;
  ${
    '' /* background-image: url(assets/images/motivating/background/mobile1x.svg); */
  }
`;
export const Information = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #000000;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: -0.2px;
  line-height: 1.1;
`;
export const Text = styled.h3`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: -0.2px;
  line-height: 1.1;
`;
export const Modal = styled.dialog`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`;
export const Button = styled.button`
  position: relative;
  padding: 0px;
  margin: 0px;
  width: 48px;
  height: 48px;
  background-color: transparent;
  color: green;
  border: 0px;
  border-radius: 58px;
`;
