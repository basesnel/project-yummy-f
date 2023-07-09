import { styled } from 'styled-components';
import { SIZE, COLOR, TRANSITION } from 'constants';

import {
	Facebook,
	Instagram,
	Twitter,
	Youtube
} from 'assets/images/followUs';


export const SocialList = styled.ul`
	margin: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 14px;

	@media screen and (min-width: ${SIZE.tablet}) {
		gap: 18px;
	}

	a {
		color: ${COLOR.main};
		transition: ${TRANSITION.forHoverColor};
		&:hover,
		&:focus {
			color: ${(props) => props.hovercolor};
		}
	}

	svg {
		fill: currentColor;
		&:hover,
		&:focus {
			fill: currentColor;
		}
	}
`

export const FacebookLogo = styled(Facebook)`
	width: 20px;
	height: 20px;
`
export const YoutubeLogo = styled(Youtube)`
	width: 20px;
	height: 15px;
`
export const TwitterLogo = styled(Twitter)`
	width: 20px;
	height: 16px;
`
export const InstagramLogo = styled(Instagram)`
	width: 17px;
	height: 17px;
`