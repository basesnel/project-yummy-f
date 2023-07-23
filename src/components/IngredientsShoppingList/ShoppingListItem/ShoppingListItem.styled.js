import { TRANSITION, COLOR } from 'constants';
import { SIZE } from 'constants';
import { styled } from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e0e0e0;

  padding-bottom: 24px;
  margin-bottom: 24px;
  max-width: 343px;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding-bottom: 42px;
    margin-bottom: 45px;
    max-width: 704px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-bottom: 43px;
    max-width: 1160px;
  }
`;

export const WrapperPhoto = styled.div`
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background-color: #ebf3d4;
  padding: 6px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 93px;
    height: 97px;
    border-radius: 8px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 8px 6px;
  }
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  color: #3e4462;
  font-family: Poppins;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;

  margin-left: 10px;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 16px;
    line-height: 1.5;

    margin-left: 16px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 243px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    width: 290px;
  }
`;

export const NumberContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 190px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    width: 370px;
  }
`;

export const ButtonContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (min-width: ${SIZE.tablet}) {
    width: 120px;
  }
  @media screen and (min-width: ${SIZE.desktop}) {
    width: 70px;
  }
`;

export const Number = styled.p`
  min-width: 37px;
  text-align: center;
  color: #fafafa;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  border-radius: 4px;
  background: #8baa36;
  padding: 4px;

  @media screen and (min-width: ${SIZE.tablet}) {
    min-width: 68px;
    font-size: 18px;
    padding: 4px;
  }
`;

export const BtnRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: ${TRANSITION.forHoverColor};
  border: none;
  width: 22px;
  height: 22px;
  padding: 0;
  // margin-right:19px
  // margin-left:46px;
  &:hover,
  &:focus {
    color: ${COLOR.main}!important;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 44px;
    height: 44px;
  }

  &:hover,
  &:focus {
  }
`;

export const IconRemove = styled('svg')`
  width: 14px;
  height: 14px;
  stroke: currentColor;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 24px;
    height: 24px;
  }
`;
