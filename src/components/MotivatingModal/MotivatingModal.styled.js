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
  position: relative;
  display: flex;
  top: 100px;
  left: 66pxpx;
  width: 100%;
  @media only screen and (min-width: ${SIZE.mobile}) {
    position: relative;
    width: 268px;
    height: 242px;
    flex-direction: row;
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    position: relative;
    width: 268px;
    height: 242px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    position: relative;
    width: 268px;
    height: 242px;
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  ${
    '' /* background-image: url(assets/images/motivating/background/mobile1x.svg); */
  }
`;
export const Information = styled.span`
  display: flex;
  position: absolute;
  width: 247px;
  top: 0;
  left: 0;
  flex-direction: row;
  text-align: start;
  color: #000000;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: -0.2px;
  line-height: 1.1;
`;
export const Text = styled.h3`
  display: flex;
  text-rendering: optimizeSpeed;
  position: absolute;
  top: 180px;
  left: 80px;
  max-width: 247px;
  height: auto;
  flex-direction: column;
  text-align: center;
  text-wrap: wrap;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: -0.2px;
  line-height: 1.1;
`;
export const Modal = styled.form`
  width: 400px;
  height: 400px;
  align-items: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Button = styled.button`
  position: relative;
  top: 330px;
  left: 0px;
  padding: 0px;
  margin: 0px;
  width: 48px;
  height: 48px;
  background-color: transparent;
  color: green;
  border: 0px;
  border-radius: 58px;
`;
