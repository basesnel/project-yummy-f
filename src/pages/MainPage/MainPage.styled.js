import { styled } from 'styled-components';

import { COLOR, SIZE } from 'constants';
import {
  squareHeroMobile,
  squareHeroTablet,
  squareHeroDesktop,
  bottomBgHeroMobile,
  bottomBgHeroMobileRetina,
  bottomBgHeroTablet,
  bottomBgHeroTabletRetina,
  bottomBgHeroDesktop,
  bottomBgHeroDesktopRetina,
  topBgHeroMobile,
  topBgHeroMobileRetina,
  topBgHeroTablet,
  topBgHeroTabletRetina,
  topBgHeroDesktop,
  topBgHeroDesktopRetina,
} from 'assets/images/hero';

export const Hero = styled.section`
  background-image: url(${bottomBgHeroMobile}), url(${squareHeroMobile}),
    url(${topBgHeroMobile});
  background-repeat: no-repeat;
  background-position: right top 50px, right top 150px, left top 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bottomBgHeroMobileRetina}), url(${squareHeroMobile}),
      url(${topBgHeroMobileRetina});
    background-size: contain, auto, 50px;
    background-position: right top 80px, right top 150px, left top 40px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    background-image: url(${bottomBgHeroTablet}), url(${squareHeroTablet}),
      url(${topBgHeroTablet});
    background-size: contain, auto, auto;
    background-position: right top, right top, left top;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bottomBgHeroTabletRetina}),
        url(${squareHeroTablet}), url(${topBgHeroTabletRetina});
      background-size: contain, auto, 60px;
      background-position: right top, right top, left top 20px;
    }
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    background-image: url(${bottomBgHeroDesktop}), url(${squareHeroDesktop}),
      url(${topBgHeroDesktop});
    background-position: right top, right top, left top;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bottomBgHeroDesktopRetina}),
        url(${squareHeroDesktop}), url(${topBgHeroDesktopRetina});
      background-size: contain, auto, 120px;
    }
  }
`;

export const HeroWrapper = styled.div`
  padding: 132px 0 83px;
  margin: 0 auto;

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 159px 0 130px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    padding: 126px 0 135px;
    gap: 68px;
    justify-content: start;
  }
`;

export const HeroTitle = styled.section`
  margin-bottom: 44px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 0;
  }

  div {
    /* @media screen and (min-width: ${SIZE.tablet}) {
      margin-bottom: 32px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      margin-bottom: 50px; */
  }

  h1 {
    margin-bottom: 14px;
    text-align: center;

    /* color: ${COLOR.dark}; */
    font-size: 60px;
    line-height: 1;
    letter-spacing: -0.3px;
    font-weight: 400;

    @media screen and (min-width: ${SIZE.tablet}) {
      margin-bottom: 24px;
      text-align: start;

      font-size: 72px;
      letter-spacing: -0.36px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      margin-bottom: 14px;

      font-size: 100px;
      letter-spacing: -0.5px;
    }

    span {
      color: ${COLOR.main};
    }
  }

  p {
    max-width: 248px;
    margin: 0 auto;
    text-align: center;

    /* color: #23262a; */
    font-size: 14px;
    line-height: ${18 / 14};
    letter-spacing: -0.28px;

    @media screen and (min-width: ${SIZE.tablet}) {
      margin-bottom: 32px;
      max-width: 362px;
      text-align: start;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      max-width: 465px;
      margin-bottom: 50px;
      font-size: 18px;
      line-height: ${24 / 18};
      letter-spacing: -0.36px;
    }
  }
`;
