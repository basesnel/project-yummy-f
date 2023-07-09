import { styled } from "styled-components";

import { COLOR } from 'constants'

export const Hero = styled.section`
	padding: 132px 36px 83px;
`

export const HeroTitle = styled.section`
	margin-bottom: 44px;
	h1 {
		margin-bottom: 14px;
		text-align: center;

		color: ${COLOR.dark};
		font-size: 60px;
		line-height: 1;
		letter-spacing: -0.3px;
		font-weight: 400;

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
	}
`