import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const RegistrationLinkStyled = styled(Link)`
  color: #fafafa;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  text-decoration-line: underline;
  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
`;
