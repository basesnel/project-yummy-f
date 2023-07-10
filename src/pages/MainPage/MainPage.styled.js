import { styled } from "styled-components";

import { COLOR } from 'constants'
import { SIZE } from "constants";

export const Hero = styled.section`
	
`

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
`

export const HeroTitle = styled.section`
	margin-bottom: 44px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 0;
	}


	div {

		@media screen and (min-width: ${SIZE.tablet}) {
			margin-bottom: 32px;
		}

		@media screen and (min-width: ${SIZE.desktop}) {
			margin-bottom: 50px;
		}

		h1 {
			margin-bottom: 14px;
			text-align: center;
	
			color: ${COLOR.dark};
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
	
			color: #23262A;
			font-size: 14px;
			line-height: ${18 / 14};
			letter-spacing: -0.28px;

			@media screen and (min-width: ${SIZE.tablet}) {
				max-width: 362px;
				text-align: start;
				margin: 0;
			}

			@media screen and (min-width: ${SIZE.desktop}) {
				max-width: 465px;

				font-size: 18px;
				line-height: ${24 / 18};
				letter-spacing: -0.36px;
			}
		}
	}
`