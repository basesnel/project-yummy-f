import { styled } from "styled-components";

import { SIZE } from "constants";

export const ShoppingListContainer = styled.section`
	padding: 114px 0 100px;
`

export const TitleContainer = styled.div`
	margin-bottom: 50px;

	@media screen and (min-width: ${SIZE.tablet}) {
		margin-bottom: 100px;
	}

`
export const Text = styled.div`
  background-color: #8baa36;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 42px;
  padding: 12px 14px;
  position: relative;

  @media screen and (min-width: ${SIZE.mobile}) {
    height: 60px;
    padding: 21px 32px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    padding: 21px 40px;
  }

  p {
    font-family: Poppins;
    color: #fafafa;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.3px;

    @media screen and (min-width: ${SIZE.mobile}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${SIZE.tablet}) {
      font-size: 18px;
      letter-spacing: 0.54px;
    }
  }
`

export const PositionedP = styled.p`
  position: absolute;
  right: 86px;

  @media screen and (min-width: ${SIZE.mobile}) {
    right: 32%;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    right: 167px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    right: 246px;
  }
`;