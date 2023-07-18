import { useLocation } from 'react-router-dom';
import {
  NavContainer,
  StyledLink,
  TextContainer,
  WrapperSearchIcon,
} from './Navigation.styled';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from '@mui/material';
import { useState } from 'react';
import THEME from 'theme';

const Navigation = ({ closeModal }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: 1439px)`,
  });
  // const { pathname } = useLocation();
  const [isPage, setIsPage] = useState(
    useLocation()?.pathname?.split('/')[1] === 'recipe'
  );

  // console.log(pathname);
  const handleLinkClick = e => {
    // console.log(e.target);

    if (e.target.nodeName === 'A' && isMobile) {
      closeModal();
    }
  };

  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;

  return (
    <ConditionalWrapper
      condition={isPage}
      wrapper={children => (
        <ThemeProvider theme={THEME.lightTheme}>{children}</ThemeProvider>
      )}
    >
      <NavContainer onClick={handleLinkClick}>
        <p>{}</p>
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
    </ConditionalWrapper>
  );
};

export default Navigation;
