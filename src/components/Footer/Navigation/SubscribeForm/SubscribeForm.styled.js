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

	label {
		align-self: center;
		width: 204px;
		position: relative;
		margin-bottom: 8px;

		@media screen and (min-width: 768px) {
			width: 259px;
			margin-bottom: 0;
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

			@media screen and (min-width: 768px) {
				height: 50px;
				padding: 15px 14px 15px 40px;

				font-size: 14px;
				letter-spacing: -0.28px;
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

		@media screen and (min-width: 768px) {
			padding: 16px 50px;

			font-size: 16px;
			line-height: ${18 / 16};
		}

		&:hover,
		&:focus {
			color: #22252A;
		}
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
