import { EmailIcon, SubscribeFormContainer } from './SubscribeForm.styled';

export function SubscribeForm() {
  return (
    <SubscribeFormContainer>
      <label>
        <input type="email" placeholder="Enter your email address" />
        <EmailIcon />
      </label>
      <button type="submit">Subscribe</button>
    </SubscribeFormContainer>
  );
}
