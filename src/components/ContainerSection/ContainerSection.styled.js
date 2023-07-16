import { styled } from 'styled-components';
import { SIZE } from 'constants';

export const BGContainer = styled.div`
  padding-top: 114px;
  padding-bottom: 100px;
  // background-color: #fafafa;
  // position: relative;
  // z-index: -150;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding-top: 136px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-top: 164px;
  }
`;

export const WrapperRectangle = styled.div`
  width: 375px;
  height: 200px;
  position: absolute;
  z-index: -10;

  top: 0;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 768px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 1440px;
  }
`;

export const Rectangle11 = styled.div`
  width: 8px;
  height: 8px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background: #8baa36;
  position: absolute;
  top: 76px;
  left: 120px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 14px;
    height: 14px;
    top: 85px;
    left: 219px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    top: 117px;
    left: 328px;
  }
`;

export const Rectangle9 = styled.div`
  width: 8px;
  height: 8px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background: #8baa36;
  position: absolute;
  top: 108px;
  right: 16px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 14px;
    height: 14px;
    top: 98px;
    right: 24px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    top: 130px;
    right: 172px;
  }
`;

export const Rectangle8 = styled.div`
  width: 6px;
  height: 6px;
  transform: rotate(-25deg);
  border-radius: 3px;
  background: #22252a;
  position: absolute;
  top: 142px;
  right: 120px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 12px;
    height: 12px;
    top: 155px;
    right: 315px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    top: 200px;
    right: 617px;
  }
`;
