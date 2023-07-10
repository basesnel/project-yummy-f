import { styled } from 'styled-components';
import rectangle_375 from '../../assets/images/signin/Rectangle-375.png';
import rectangle_768 from '../../assets/images/signin/Rectangle-768.png';
import rectangle_1440 from '../../assets/images/signin/Rectangle-1440.png';
import { COLOR } from 'constants';
import { SIZE } from 'constants';

export const RegisterContainer = styled.div`
  background: ${COLOR.second};
  background-image: url(${rectangle_375});
  background-position: center top 322px;
  background-size: contain;
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
  padding-bottom: 80px;
  @media screen and (min-width: ${SIZE.tablet}) {
    background-image: url(${rectangle_768});
    background-position: center top 418px;
    padding-left: 134px;
    padding-right: 134px;
    padding-top: 96px;
    width: 768px;
    padding-bottom: 31px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding-left: 113px;
    padding-right: 180px;
    padding-top: 115px;
    padding-bottom: 68px;
    width: 1440px;
    background-image: url(${rectangle_1440});
    background-position: center top 444px;
    flex-direction: row;
    align-items: start;
    gap: 115px;
  }
`;
