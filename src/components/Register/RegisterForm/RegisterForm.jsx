import SigninLink from '../SigninLink/SigninLink';
import {
  Box,
  FormRegister,
  IconWrapper,
  RegisterButton,
  RegisterInput,
  RegisterInputWrapper,
  RegisterLabel,
} from './RegisterForm.styled';
import { ReactComponent as EmailIcon } from '../../../assets/images/signin/mail-01.svg';
import { ReactComponent as LockIcon } from '../../../assets/images/signin/lock-02.svg';


export default function RegisterPage() {
  return (
    <Box>
      
      <FormRegister>
        <RegisterLabel>Registation</RegisterLabel>

        <RegisterInputWrapper>
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>                 

          <RegisterInput
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </RegisterInputWrapper>
              
         <RegisterInputWrapper>
          <IconWrapper>
            <LockIcon />
          </IconWrapper>

          <RegisterInput
            type="password"
            name="password"
            id="email"
            placeholder="Password"
          />
        </RegisterInputWrapper>
        <RegisterButton type="submit">Sign Up</RegisterButton>
      </FormRegister>
      <SigninLink />
    </Box>
  );
}
