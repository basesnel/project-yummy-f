import { SIZE } from 'constants';
import { styled } from 'styled-components';

export const Field = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  @media only screen and (min-width: ${SIZE.mobile}) {
    flex-direction: row;
  }
  @media only screen and (min-width: ${SIZE.tablet}) {
    letter-spacing: -0.24px;
  }
  @media only screen and (min-width: ${SIZE.desctop}) {
    margin: 33.5px 0 0 0;
  }
`;
export const Container = styled.div`
  background: url();
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
