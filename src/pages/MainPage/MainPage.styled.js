import { styled } from "styled-components";

import { COLOR } from 'constants'
import { SIZE } from "constants";

export const Hero = styled.section`
	padding: 132px 36px 83px;

	@media screen and (min-width: ${SIZE.tablet}) {
		padding: 159px 0 130px 32px;
		display: flex;
		align-items: center;
		justify-content: center;
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
			}
		}
	}
`