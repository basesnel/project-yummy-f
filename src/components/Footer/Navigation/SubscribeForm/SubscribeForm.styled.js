import { styled } from 'styled-components';
import { SIZE, COLOR, TRANSITION } from 'constants';

import { ReactComponent as MailIcon } from 'assets/images/footer/mail.svg';

export const SubscribeFormComponent = styled.form`
	display: flex;
	flex-direction: column;

	margin-bottom: 44px;

	@media screen and (min-width: ${SIZE.tablet}) {
		flex-direction: row;
		justify-content: center;
		gap: 12px;
		margin-bottom: 38px;
	}

	@media screen and (min-width: ${SIZE.desktop}) {
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

		@media screen and (min-width: ${SIZE.tablet}) {
			width: 259px;
			margin-bottom: 0;
		}

		@media screen and (min-width: ${SIZE.desktop}) {
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

			color: ${COLOR.second};
			font-size: 10px;
			letter-spacing: -0.2px;

			transition: ${TRANSITION.forHoverBorderColor};

			&:hover,
			&:focus {
				border-color: ${COLOR.second};
			}

			@media screen and (min-width: ${SIZE.tablet}) {
				height: 50px;
				padding: 15px 14px 15px 40px;

				font-size: 14px;
				letter-spacing: -0.28px;
			}

			@media screen and (min-width: ${SIZE.desktop}) {
				padding: 17.5px 14px 17.5px 42px;

				font-size: 18px;
				letter-spacing: -0.36px;
			}
		}
	}
	.input__error{
		> input {
			border-color: ${COLOR.warning};
		}

		> svg {
			stroke: ${COLOR.warning};
		}
		> p {
			margin-top: 8px;

			font-size: 14px;
			color: ${COLOR.warning};
		}
	}

	button {
		align-self: center;
		max-width: 204px;
		padding: 11px 67px;

		background: ${COLOR.main};
		border: none;
		border-radius: 6px;

		color: ${COLOR.second};
		font-size: 14px;
		line-height: ${16 / 14};

		transition: ${TRANSITION.forHoverColor};

		&:hover,
		&:focus {
			color: ${COLOR.dark};
		}

		@media screen and (min-width: ${SIZE.tablet}) {
			padding: 16px 50px;

			font-size: 16px;
			line-height: ${18 / 16};
		}

		@media screen and (min-width: ${SIZE.desktop}) {
			max-width: none;
			width: 100%;
			padding: 21px 50px;
		}
	}
`

export const SubscribeFormDescrBox = styled.div`
	display: none;
	margin-bottom: 28px;

	@media screen and (min-width: ${SIZE.desktop}) {
		display: block;
	}

	h4 {
		margin-bottom: 14px;

		color: ${COLOR.second};
		font-size: 18px;
		font-weight: 700;
	}

	p {
		color: ${COLOR.second};
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

	@media screen and (min-width: ${SIZE.tablet}) {
		width: 20px;
		height: 16px;

		top: 16px;
	}

	label:focus-within &,
	input:hover + & {
		stroke: #FAFAFA;
	}
`
