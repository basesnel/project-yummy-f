import { LinkList, StyledLink } from './Nav.styled';

export function Nav() {
  return (
    <LinkList>
      <li>
        <StyledLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          to="/search"
        >
          Ingredients
        </StyledLink>
      </li>
      <li>
        <StyledLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          to="/add"
        >
          Add recipes
        </StyledLink>
      </li>
      <li>
        <StyledLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          to="/my"
        >
          My recipes
        </StyledLink>
      </li>
      <li>
        <StyledLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          to="/favorite"
        >
          Favorite
        </StyledLink>
      </li>
      <li>
        <StyledLink
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          to="/shopping-list"
        >
          Shopping list
        </StyledLink>
      </li>
    </LinkList>
  );
}
