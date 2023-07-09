import { styled } from "styled-components";

import {
	footerTopBgImage,
	footerTopBgImageRetina,
	footerTopBgImageTablet,
	footerTopBgImageTabletRetina,
	footerTopBgImageDesktop,
	footerTopBgImageDesktopRetina,
	footerBottomBgImage,
	footerBottomBgImageRetina,
	footerBottomBgImageTablet,
	footerBottomBgImageTabletRetina,
	footerBottomBgImageDesktop,
	footerBottomBgImageDesktopRetina
} from 'assets/images/footer'



export const FooterWraper = styled.footer`
	position: relative;

	background-image: url(${footerBottomBgImage});
		background-position: right bottom;
		background-repeat: no-repeat;

	@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
		background-image: url(${footerBottomBgImageRetina});
		background-position: right -30px bottom -10px;
	}

	@media screen and (min-width: 768px) {
		background-image: url(${footerBottomBgImageTablet});

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerBottomBgImageTabletRetina});
			background-position: right -50px bottom -30px;
		}
	}

	@media screen and (min-width: 1440px) {
		background-image: url(${footerBottomBgImageDesktop});

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerBottomBgImageDesktopRetina});
		}
	}
`

export const CopyrightContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 14px;
	padding: 28px 0;

	@media screen and (min-width: 768px) {
		gap: 28px;
		padding: 32px 0;
	}

	@media screen and (min-width: 1440px) {
		gap: 40px;
		padding: 50px 0;
	}

	p {
		color: #22252A;
		font-size: 10px;
		line-height: 1;
		letter-spacing: -0.1px;
		opacity: 0.5;

		@media screen and (min-width: 768px) {
			font-size: 14px;
			letter-spacing: -0.14px;
		}

		
	}

	p:first-child {
		font-weight: 500;
	}
`

export const FooterTopBgImage = styled.div`
	position: absolute;
	top: -250px;
	left: 0;
	width: 300px;
	height: 300px;
	z-index: -99;
	background-image: url(${footerTopBgImage});
	background-repeat: no-repeat;

	@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
		height: 600px;
		background-image: url(${footerTopBgImageRetina});
		top: -450px;
		left: -100px;
	}

	@media screen and (min-width: 768px) {
		background-image: url(${footerTopBgImageTablet});
		height: 500px;
		top: -400px;

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerTopBgImageTabletRetina});
			height: 800px;
			width: 500px;
			top: -700px;
		}
	}

	@media screen and (min-width: 1440px) {
		background-image: url(${footerTopBgImageDesktop});
		width: 400px;
		height: 600px;
		top: -500px;

		@media (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
			background-image: url(${footerTopBgImageDesktopRetina});
			height: 1100px;
			width: 650px;
			top: -1000px;
			left: -200px;
		}
	}
`