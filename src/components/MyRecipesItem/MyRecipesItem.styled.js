import { SIZE } from 'constants';
import { styled } from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 50px;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 40px;
  }
`;

export const WrapperPhoto = styled.div`
  overflow: hidden;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 318px;
    height: 324px;
    border: 1px solid black;
    border-radius: 8px;
  }
`;

export const Photo = styled.img`
  max-width: 100%;
  //   @media screen and (min-width: ${SIZE.tablet}) {

  //   }
`;

export const WrapperDescription = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${SIZE.tablet}) {
    height: 324px;
  }
`;

export const Title = styled.h2`
  color: #3e4462;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 50px;

  //   @media screen and (min-width: ${SIZE.tablet}) {

  //   }
`;

export const Text = styled.p`
  color: #23262a;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
  max-width: 679px;
  margin-bottom: 14px;

  //   @media screen and (min-width: ${SIZE.tablet}) {

  //   }
`;

export const TextTime = styled.p`
  margin-top: auto;
  color: #3e4462;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: -0.24px;

  //   @media screen and (min-width: ${SIZE.tablet}) {

  //   }
`;

export const BtnRemove = styled.button`
  position: absolute;
  right: 40px;
  top: 40px;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  background: #ebf3d4;
  border: none;
`;

export const BtnDetail = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;

  color: #fafafa;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  background-color: black;

  padding: 14px 38px 22px 38px;
  border-radius: 24px 44px;
`;
