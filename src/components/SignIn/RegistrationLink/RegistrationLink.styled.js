import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { TRANSITION, SIZE, COLOR } from 'constants';

export const RegistrationLinkStyled = styled(Link)`
  color: ${COLOR.second};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  text-decoration-line: underline;
  transition: ${TRANSITION.forHoverColor};

  &:hover,
  &:focus {
    color: ${COLOR.main};
  }
  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 16px;
  }
`;
