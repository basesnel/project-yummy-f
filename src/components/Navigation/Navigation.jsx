import {
  NavContainer,
  StyledLink,
  TextContainer,
  WrapperSearchIcon,
} from './Navigation.styled';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material';

const Navigation = ({ closeModal }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: 1439px)`,
  });
  // const { pathname } = useLocation();

  const handleLinkClick = e => {
    if (e.target.nodeName === 'A' && isMobile) {
      closeModal();
    }
  };
  const theme = useTheme();
  return (
    <NavContainer
      style={{ color: theme.palette.text.primary }}
      onClick={handleLinkClick}
    >
      <StyledLink to="/categories/:categoryName">Categories</StyledLink>
      <StyledLink to="/add">Add recipes</StyledLink>
      <StyledLink to="/my">My recipes</StyledLink>
      <StyledLink to="/favorite">Favorites</StyledLink>
      <StyledLink to="/shopping-list">Shopping list</StyledLink>
      <StyledLink to="/search">
        <WrapperSearchIcon />
        <TextContainer>Search</TextContainer>
      </StyledLink>
    </NavContainer>
  );
};

export default Navigation;
