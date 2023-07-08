import { styled } from "styled-components";
import { ReactComponent as FooterLogo } from 'assets/images/footer/logo.svg';

export const NavigationWrapper = styled.div`
	padding: 28px 0 18px;

	background-color: #22252A;
`

export const NavigationContainer = styled.div`
	> div{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		margin-bottom: 39px;

		h3 {
			color: #FAFAFA;
			font-size: 18px;
			font-weight: 700;
			line-height: 1;
			letter-spacing: 0.27px;
		}
	}
`

export const NavLogo = styled(FooterLogo)`
	width: 32px;
	height: 32px;
`