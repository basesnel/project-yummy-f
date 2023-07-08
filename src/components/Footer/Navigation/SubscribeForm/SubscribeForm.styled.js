import { styled } from 'styled-components';

import { ReactComponent as MailIcon } from 'assets/images/footer/mail.svg';

export const SubscribeFormContainer = styled.form`
	display: flex;
	flex-direction: column;

	margin-bottom: 44px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		gap: 12px;
		margin-bottom: 38px;
	}

	@media screen and (min-width: 1440px) {
		max-width: 339px;
		flex-direction: column;
		gap: 0;
		justify-content: start;
		margin-bottom: 0;
	}

	label {
		align-self: center;
		width: 204px;
		position: relative;
		margin-bottom: 8px;

		@media screen and (min-width: 768px) {
			width: 259px;
			margin-bottom: 0;
		}

		@media screen and (min-width: 1440px) {
			width: 100%;
			align-self: baseline;
			margin-bottom: 16px;
		}

		input {
			width: 100%;
			height: 38px;
			padding: 10px 14px 10px 42px;

			background-color: transparent;
			border: 1px solid rgba(250, 250, 250, 0.15700000524520874);
			border-radius: 5px;

			color: #FAFAFA;
			font-size: 10px;
			letter-spacing: -0.2px;

			&:hover,
			&:focus {
				border-color: #FAFAFA;
			}

			@media screen and (min-width: 768px) {
				height: 50px;
				padding: 15px 14px 15px 40px;

				font-size: 14px;
				letter-spacing: -0.28px;
			}

			@media screen and (min-width: 1440px) {
				padding: 17.5px 14px 17.5px 42px;

				font-size: 18px;
				letter-spacing: -0.36px;
			}
		}
	}

	button {
		align-self: center;
		max-width: 204px;
		padding: 11px 67px;

		background: #8BAA36;
		border: none;
		border-radius: 6px;

		color: #FAFAFA;
		font-size: 14px;
		line-height: ${16 / 14};

		&:hover,
		&:focus {
			color: #22252A;
		}

		@media screen and (min-width: 768px) {
			padding: 16px 50px;

			font-size: 16px;
			line-height: ${18 / 16};
		}

		@media screen and (min-width: 1440px) {
			max-width: none;
			width: 100%;
			padding: 21px 50px;
		}
	}
`

export const SubscribeFormDescrBox = styled.div`
	display: none;
	margin-bottom: 28px;

	@media screen and (min-width: 1440px) {
		display: block;
	}

	h4 {
		margin-bottom: 14px;

		color: #FAFAFA;
		font-size: 18px;
		font-weight: 700;
	}

	p {
		color: #FAFAFA;
		font-size: 14px;
		line-height: ${18 / 14};
		letter-spacing: -0.28px;
	}
`

export const EmailIcon = styled(MailIcon)`
	position: absolute;
	top: 12px;
	left: 14px;

	width: 16px;
	height: 12px;

	stroke: rgba(250, 250, 250, 0.800000011920929);

	@media screen and (min-width: 768px) {
		width: 20px;
		height: 16px;

		top: 16px;
	}

	label:focus-within &,
	input:hover + & {
		stroke: #FAFAFA;
	}
`
