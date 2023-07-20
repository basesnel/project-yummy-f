import { styled } from 'styled-components';
import { SIZE } from 'constants';

import { Facebook, Instagram, Twitter, Youtube } from 'assets/images/followUs';
import { TRANSITION } from 'constants';

export const SocialList = styled.ul`
  margin: 0;
  width: 119px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 134px;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.$color};
    transition: ${TRANSITION.forHoverColor};
    &:hover,
    &:focus {
      color: ${props => props.$hovercolor};
    }
    transition: ${TRANSITION.forHoverColor};
  }

  svg {
    fill: currentColor;
    &:hover,
    &:focus {
      fill: currentColor;
    }
  }
`;

export const FacebookLogo = styled(Facebook)`
  width: 20px;
  height: 20px;
`;
export const YoutubeLogo = styled(Youtube)`
  width: 20px;
  height: 15px;
`;
export const TwitterLogo = styled(Twitter)`
  width: 20px;
  height: 16px;
`;
export const InstagramLogo = styled(Instagram)`
  width: 17px;
  height: 17px;
`;
