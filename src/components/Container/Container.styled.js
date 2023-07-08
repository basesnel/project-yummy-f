import { styled } from "styled-components";

export const MainContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media screen and (min-width: 375px) {
		width: 375px;
	}

	@media screen and (min-width: 768px) {
		padding-left: 32px;
		padding-right: 32px;
		width: 768px;
	}

	@media screen and (min-width: 1440px) {
		padding-left: 100px;
		padding-right: 100px;
		min-width: 1440px;
	}
`