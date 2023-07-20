import {
  FacebookLogo,
  InstagramLogo,
  SocialList,
  TwitterLogo,
  YoutubeLogo,
} from './FollowUs.styled';

export function FollowUs({ hoverColor, colorIcon }) {
  return (
    <SocialList $hovercolor={hoverColor} $color={colorIcon}>
      <li>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FacebookLogo />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <YoutubeLogo />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <InstagramLogo />
        </a>
      </li>
    </SocialList>
  );
}
