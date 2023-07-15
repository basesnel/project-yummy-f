import styled from 'styled-components';
import { SIZE, COLOR } from 'constants';
import checked from '../../assets/images/recipePage/checked.svg';
import unchecked from '../../assets/images/recipePage/unchecked.svg';

export const MainSection = styled.section`
  padding: 50px 100px;
`;

export const ListHead = styled.div`
  background-color: #8baa36;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 42px;
  padding: 12px 14px;
  position: relative;

  @media screen and (min-width: ${SIZE.mobile}) {
    height: 60px;
    padding: 21px 32px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 21px 40px;
  }

  p {
    font-family: Poppins;
    color: #fafafa;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.3px;

    @media screen and (min-width: ${SIZE.mobile}) {
      font-size: 18px;
      letter-spacing: 0.54px;
    }
  }
`;

export const PositionedP = styled.p`
  position: absolute;
  right: 25%;

  @media screen and (min-width: ${SIZE.tablet}) {
    right: 20%;
  }
`;

export const List = styled.ul`
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  @media screen and (min-width: ${SIZE.mobile}) {
    margin-top: 32px;
    gap: 24px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 50px;
  }
`;

export const IngrItem = styled.li`
  background-color: #ebf3d4;
  padding: 0 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${SIZE.mobile}) {
    padding: 0 24px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 0 32px;
  }
`;

export const ImgAndName = styled.div`
  margin: 0;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  img {
    padding: 4px;
  }

  p {
    color: ${COLOR.primaryText};
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: ${SIZE.mobile}) {
    gap: 24px;

    img {
      padding: 17px 16px;
    }

    p {
      font-family: 24px;
      line-height: 1;
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 40px;

    img {
      padding: 26px;
    }
  }
`;

export const MeasureAndCheckbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;

  div:first-child {
    background-color: ${COLOR.hover};
    border-radius: 4px;
    padding: 4px;

    p {
      color: ${COLOR.second};
      text-align: right;
      font-family: Poppins;
      font-size: 10px;
      font-weight: 600;
    }
  }

  @media screen and (min-width: ${SIZE.mobile}) {
    gap: 78px;

    div:first-child {
      padding: 4px 8px;

      p {
        font-size: 18px;
      }
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 150px;
  }
`;

export const Checked = styled.div`
  width: 18px;
  height: 18px;
  background-image: url('${checked}');
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: ${SIZE.mobile}) {
    width: 35px;
    height: 35px;
  }
`;

export const Unchecked = styled.div`
  width: 18px;
  height: 18px;
  background-image: url('${unchecked}');
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: ${SIZE.mobile}) {
    width: 35px;
    height: 35px;
  }
`;
