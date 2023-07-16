import { styled } from 'styled-components';
import rectangle_375 from '../../assets/images/signin/Rectangle-375.png';
import rectangle_768 from '../../assets/images/signin/Rectangle-768.png';
import rectangle_1440 from '../../assets/images/signin/Rectangle-1440.png';
import { COLOR } from 'constants';
import { SIZE } from 'constants';

export const AuthStyledContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${COLOR.second};
  background-image: url(${rectangle_375});
  background-position: center top 290px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  /* min-width: 375px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 87px;
  padding-bottom: 20px;

  @media screen and (min-width: ${SIZE.tablet}) {
    background-image: url(${rectangle_768});
    background-position: center top 370px;
    padding-top: 96px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-top: 0;
    background-image: url(${rectangle_1440});
    background-size: 100% 325px;
    background-position: center bottom;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 115px;
  }
`;
