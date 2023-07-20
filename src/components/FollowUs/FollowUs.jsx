import { useTheme } from '@mui/material';
import {
  FacebookLogo,
  InstagramLogo,
  SocialList,
  TwitterLogo,
  YoutubeLogo,
} from './FollowUs.styled';

export function FollowUs({ hoverColor }) {
  const theme = useTheme();
  return (
    <SocialList $hovercolor={hoverColor}>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookLogo />
        </a>
      </li>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
        >
          <YoutubeLogo />
        </a>
      </li>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
      </li>
      <li>
        <a
          style={{ color: theme.palette.iconHeader }}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo />
        </a>
      </li>
    </SocialList>
  );
}
