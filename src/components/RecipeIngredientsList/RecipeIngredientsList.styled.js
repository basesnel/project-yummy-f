import styled from 'styled-components';
import { SIZE, COLOR } from 'constants';

export const MainSection = styled.section`
  padding: 32px 16px;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 50px 32px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 50px 100px;
  }
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

  @media screen and (min-width: ${SIZE.tablet}) {
    height: 60px;
    padding: 21px 32px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 21px 40px;
  }

  p {
    font-family: Poppins;
    color: #fafafa;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.3px;

    @media screen and (min-width: ${SIZE.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      font-size: 18px;
      letter-spacing: 0.54px;
    }
  }
`;

export const PositionedP = styled.p`
  position: absolute;
  right: 86px;

  @media screen and (min-width: ${SIZE.mobile}) {
    right: 32%;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    right: 167px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    right: 246px;
  }
`;

export const List = styled.ul`
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 32px;
    gap: 24px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
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

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 0 24px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
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
    width: 65px;
    height: 65px;
  }

  p {
    color: inherit;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: ${SIZE.mobile}) {
    gap: 8px;

    img {
      padding: 17px 16px;
      width: 144px;
      height: 146px;
    }

    p {
      font-size: 24px;
      line-height: 1;
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 24px;

    img {
      padding: 26px;
      width: 180px;
      height: 180px;
    }
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    gap: 40px;
  }
`;

export const MeasureAndCheckbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 78px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    gap: 150px;
  }
`;

export const MeasureCont = styled.div`
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

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 4px 8px;

    p {
      font-size: 18px;
    }
  }
`;
