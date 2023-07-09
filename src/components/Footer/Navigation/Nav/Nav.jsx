import { LinkList, StyledLink } from './Nav.styled';

export function Nav() {
  return (
    <LinkList>
      <li>
        <StyledLink to="/search">Ingredients</StyledLink>
      </li>
      <li>
        <StyledLink to="/add">Add recipes</StyledLink>
      </li>
      <li>
        <StyledLink to="/my">My recipes</StyledLink>
      </li>
      <li>
        <StyledLink to="/favorite">Favorite</StyledLink>
      </li>
      <li>
        <StyledLink to="/shopping-list">Shopping list</StyledLink>
      </li>
    </LinkList>
  );
}
