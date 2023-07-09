import RegistrationLink from './RegistrationLink';
import {
  Box,
  FormSignin,
  IconWrapper,
  SigninButton,
  SigninInput,
  SigninInputWrapper,
  SigninLabel,
} from './SigninForm.styled';
import { ReactComponent as EmailIcon } from '../../img/SigninPage/mail-01.svg';
import { ReactComponent as LockIcon } from '../../img/SigninPage/lock-02.svg';

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
