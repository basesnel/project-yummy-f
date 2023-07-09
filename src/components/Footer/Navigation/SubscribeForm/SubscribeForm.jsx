import {
  EmailIcon,
  SubscribeFormContainer,
  SubscribeFormDescrBox,
} from './SubscribeForm.styled';

export function SubscribeForm() {
  return (
    <SubscribeFormContainer>
      <SubscribeFormDescrBox>
        <h4>Subscribe to our Newsletter</h4>
        <p>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </SubscribeFormDescrBox>
      <label>
        <input type="email" placeholder="Enter your email address" />
        <EmailIcon />
      </label>
      <button type="submit">Subscribe</button>
    </SubscribeFormContainer>
  );
}
