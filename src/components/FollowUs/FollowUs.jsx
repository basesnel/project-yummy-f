import {
  FacebookLogo,
  InstagramLogo,
  SocialList,
  TwitterLogo,
  YoutubeLogo,
} from './FollowUs.styled';

export function FollowUs({ hoverColor }) {
  return (
    <SocialList hovercolor={hoverColor}>
      <li>
        <a href="#" target="_blank">
          <FacebookLogo />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <YoutubeLogo />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <InstagramLogo />
        </a>
      </li>
    </SocialList>
  );
}
