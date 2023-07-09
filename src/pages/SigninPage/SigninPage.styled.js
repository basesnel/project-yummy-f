import { styled } from 'styled-components';
import rectangle_375 from '../../img/SigninPage/Rectangle-375.png';
import rectangle_768 from '../../img/SigninPage/Rectangle-768.png';
import rectangle_1440 from '../../img/SigninPage/Rectangle-1440.png';

export const SigninContainer = styled.div`
  background: #fafafa;
  background-image: url(${rectangle_375});
  background-position: center top 290px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 87px;
  padding-bottom: 153px;
  @media screen and (min-width: 768px) {
    background-image: url(${rectangle_768});
    background-position: center top 323px;
    padding-left: 134px;
    padding-right: 134px;
    padding-top: 96px;
    width: 768px;
    padding-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 113px;
    padding-right: 180px;
    padding-top: 115px;
    padding-bottom: 153px;
    min-width: 1440px;
    background-image: url(${rectangle_1440});
    background-position: center top 329px;
    flex-direction: row;
    align-items: start;
    gap: 115px;
  }
`;
