import { styled } from 'styled-components';

import { ReactComponent as MailIcon } from 'assets/images/footer/mail.svg';

export const SubscribeFormContainer = styled.form`
display: flex;
flex-direction: column;
/* align-items: center; */

	margin-bottom: 44px;

	label {
		position: relative;
		display: block;
		margin-bottom: 8px;

		input {
			width: 100%;
			padding: 10px 14px 10px 42px;

			background-color: transparent;
			border: 1px solid rgba(250, 250, 250, 0.15700000524520874);
			border-radius: 5px;

			color: #FAFAFA;
			font-size: 10px;
			letter-spacing: -0.2px;
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
	}
`

export const EmailIcon = styled(MailIcon)`
	position: absolute;
	top: 11px;
	left: 14px;

	width: 16px;
	height: 12px;

	stroke: rgba(250, 250, 250, 0.800000011920929);

	label:focus-within &,
	input:hover + & {
		stroke: #FAFAFA;
	}
`
