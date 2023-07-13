import { SIZE } from 'constants';
import { styled } from 'styled-components';
import { ReactComponent as IconRemove } from 'assets/images/favorite/Icon.svg';

export const Item = styled.li`
  position: relative;
  display: flex;
  background-color: #fff;
  padding: 14px 9px;
  margin-bottom: 18px;
  border-radius: 8px;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 28px 24px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 40px;
    margin-bottom: 50px;
  }
`;

export const WrapperPhoto = styled.div`
  overflow: hidden;
  width: 124px;
  height: 124px;
  border-radius: 8px;

  border: 1px solid black;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 228px;
    height: 232px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 318px;
    height: 324px;
  }
`;

export const Photo = styled.img`
  max-width: 100%;
  //   @media screen and (min-width: ${SIZE.tablet}) {

  //   }
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 124px;
  margin-left: 14px;

  @media screen and (min-width: ${SIZE.tablet}) {
    height: 232px;
    margin-left: 24px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    height: 324px;
    margin-left: 40px;
  }
`;

export const Title = styled.h2`
  color: #3e4462;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 14px;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-bottom: 50px;
  }
`;

export const MainText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  whitespace: nowrap;

  color: #23262a;
  font-family: Poppins;
  font-size: 8px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.16px;

  max-width: 153px;
  height: 50px;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 14px;

    line-height: 1.28;
    letter-spacing: -0.28px;
    max-width: 298px;
    height: 73px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    font-size: 18px;

    line-height: 1.33;
    letter-spacing: -0.36px;
    max-width: 679px;
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  display: none;

  @media screen and (min-width: ${SIZE.desktop}) {
    display: block;
    color: #23262a;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: -0.36px;
    max-width: 679px;
  }
`;

export const TextTime = styled.p`
  margin-top: auto;
  color: #3e4462;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  }
`;

export const BtnRemove = styled.button`
  position: absolute;
  border-radius: 4px;
  background: #ebf3d4;
  border: none;

  right: 9px;
  top: 14px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: ${SIZE.tablet}) {
    right: 24px;
    top: 28px;
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    right: 40px;
    top: 40px;
    width: 44px;
    height: 44px;
  }
`;

export const WrapperIconRemove = styled(IconRemove)`
  width: 100%;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
`;

export const BtnDetail = styled.button`
  position: absolute;
  right: 9px;
  bottom: 14px;
  padding: 8px 14px;

  color: #fafafa;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  background-color: black;

  border-radius: 24px 44px;
  border: 0;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 14px;
    right: 24px;
    bottom: 28px;
    padding: 12px 32px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    font-size: 16px;
    right: 40px;
    bottom: 40px;
    padding: 14px 38px 22px 38px;
  }

  &:hover,
  &:focus {
    background-color: #8baa36;
  }
`;
