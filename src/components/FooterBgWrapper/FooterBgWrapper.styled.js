import { styled } from "styled-components";

import {
	footerTopBgImage,
	footerTopBgImageRetina,
	footerTopBgImageTablet,
	footerTopBgImageTabletRetina,
	footerTopBgImageDesktop,
	footerTopBgImageDesktopRetina,
} from 'assets/images/footer'
import { SIZE } from "constants";

export const FooterBgWrapper = styled.div`
	background-image: url(${footerTopBgImage});
	background-repeat: no-repeat;
	background-position: left bottom -220px;

	@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
		background-image: url(${footerTopBgImageRetina});
		background-size: 300px;
		background-position: left bottom -220px;
	}

	@media screen and (min-width: ${SIZE.tablet}) {
		background-image: url(${footerTopBgImageTablet});
		background-position: left bottom -360px;

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerTopBgImageTabletRetina});
			background-size: 500px;
			background-position: left bottom -370px;
		}
	}

	@media screen and (min-width: ${SIZE.desktop}) {
		background-image: url(${footerTopBgImageDesktop});
		background-position: left bottom -480px;

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerTopBgImageDesktopRetina});
			background-size: 700px;
			background-position: left bottom -500px;
		}
	}
`