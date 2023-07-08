import { AuthForm } from 'components/AuthForm/AuthForm';

import {
  Container,
  Title,
  Button,
 

} from './RegisterPage.styled';



import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <Container>

      <Title>Registration</Title>   
              
      <AuthForm />
      
       <Button type="submit">
          Sign Up
       </Button>
            
      <Link to="/signin">Sign In</Link>
        

    </Container>
  );
}
