import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import OrderFood from '../../assets/images/Register/Order food-pana 1 1.jpg'


export const Container = styled.section`
     background-image: url('${OrderFood}'),
 
`;


export const Title = styled.h1`
  color: #fafafa;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 600;
   

  @media screen and (min-width: 768px) {
    font-size: 28px;
    
  }
`;

export const Button = styled.button`



`;

export const Link = styled(NavLink)`
  color: #fafafa;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;


