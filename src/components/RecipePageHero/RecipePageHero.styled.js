import styled from 'styled-components';
import heroMob from '../../assets/images/recipePage/heroMob.jpg';
import heroMobRetina from '../../assets/images/recipePage/heroMob@2x.jpg';
import heroTab from '../../assets/images/recipePage/heroTab.jpg';
import heroTabRetina from '../../assets/images/recipePage/heroTab@2x.jpg';
import heroDesk from '../../assets/images/recipePage/heroTab.jpg';
import heroDeskRetina from '../../assets/images/recipePage/heroTab@2x.jpg';
import { SIZE } from 'constants';

export const RecipeHero = styled.section`
  width: 100vw;
  background-image: url('${heroMob}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${heroMobRetina}');
  }

  @media screen and (min-width: ${SIZE.mobile}) {
    background-image: url('${heroTab}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${heroTabRetina}');
    }
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    background-image: url('${heroDesk}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${heroDeskRetina}');
    }
  }
`;

export const RecipeTitle = styled.h1`
  color: '#8baa36';
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.48px;
  margin: 0;

  @media screen and (min-width: ${SIZE.mobile}) {
    font-size: 44px;
    letter-spacing: -0.88px;
  }
`;

export const RecipeDeskr = styled.p`
  color: #22252a;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.24px;
  margin: 24px 0 0 0;

  @media screen and (min-width: ${SIZE.mobile}) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 42px 0 0 0;

  @media screen and (min-width: ${SIZE.mobile}) {
    gap: 8px;
    margin-top: 60px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 48px;
  }

  p {
    font-family: Poppins;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.24px;
    color: #23262a;

    @media screen and (min-width: ${SIZE.mobile}) {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;
