import { SIZE, COLOR } from 'constants';
import { styled } from 'styled-components';





export const Item = styled.li`
 
  padding: 0 0px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 0 20px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 0 0px;
  }
`;

export const WrapperPhoto = styled.div`
  margin: 0;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;

  img {
  
    background-color: #ebf3d4;
    width: 93px;
    height: 97px;
    border: 1px solid black;
    border-radius: 8px;
  
  }

  p {
    color: inherit;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    
  }
  @media screen and (min-width: ${SIZE.mobile}) {
    gap: 10px;

    img {
      padding: 17px 16px;
      width: 60px;
      height: 60px;
    }

    p {
      font-size: 12px;
      line-height: 1;
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 16px;

    img {
      padding: 26px;
      width: 93px;
      height: 97px;
    }
    p {
      font-size: 24px;
      line-height: 1;
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
    //  gap: 78px;

    div:first-child {
      padding: 4px 8px;

      p {
        font-size: 18px;
      }
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    gap: 78px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    gap: 150px;
  }
`;

