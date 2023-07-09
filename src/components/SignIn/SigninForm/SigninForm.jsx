import RegistrationLink from '../RegistrationLink/RegistrationLink';
import {
  Box,
  FormSignin,
  IconWrapper,
  SigninButton,
  SigninInput,
  SigninInputWrapper,
  SigninLabel,
} from './SigninForm.styled';
import { ReactComponent as EmailIcon } from '../../../assets/images/signin/mail-01.svg';
import { ReactComponent as LockIcon } from '../../../assets/images/signin/lock-02.svg';

export default function SigninForm() {
  return (
    <Box>
      <FormSignin>
        <SigninLabel>Sign In</SigninLabel>

        <SigninInputWrapper>
          <IconWrapper>
            <EmailIcon />
          </IconWrapper>

          <SigninInput
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </SigninInputWrapper>
        <SigninInputWrapper>
          <IconWrapper>
            <LockIcon />
          </IconWrapper>

          <SigninInput
            type="password"
            name="password"
            id="email"
            placeholder="Password"
          />
        </SigninInputWrapper>
        <SigninButton type="submit">Sign In</SigninButton>
      </FormSignin>
      <RegistrationLink />
    </Box>
  );
}
