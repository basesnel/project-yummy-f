import { styled } from 'styled-components';
import rectangle_375 from '../../assets/images/signin/Rectangle-375.png';
import rectangle_768 from '../../assets/images/signin/Rectangle-768.png';
import rectangle_1440 from '../../assets/images/signin/Rectangle-1440.png';
import { COLOR } from 'constants';
import { SIZE } from 'constants';

export const SigninContainer = styled.div`
  background: ${COLOR.second};
  background-image: url(${rectangle_375});
  background-position: center top 322px;
  background-size: 100% 490px;
  background-repeat: no-repeat;
  position: relative;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 87px;
  padding-bottom: 153px;
  @media screen and (min-width: ${SIZE.tablet}) {
    background-image: url(${rectangle_768});
    background-position: center top 418px;
    background-size: 100% 606px;
    padding-left: 134px;
    padding-right: 134px;
    padding-top: 96px;
    min-width: 768px;
    padding-bottom: 119px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-left: 113px;
    padding-right: 180px;
    padding-top: 115px;
    padding-bottom: 153px;
    min-width: 1440px;
    background-image: url(${rectangle_1440});
    background-size: 100% 325px;
    background-position: center top 444px;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 115px;
  }
`;
