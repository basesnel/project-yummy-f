import {
  ArrowRight,
  BreakfastContainer,
  HeroArrowIcon,
  SeeRecipesBtn,
} from './ChooseYourBreakfast.styled';

export function ChooseYourBreakfast() {
  return (
    <BreakfastContainer>
      <div>
        <p>
          <span>Delicious and healthy</span> way to enjoy a variety of fresh
          ingredients in one satisfying meal
        </p>
        <SeeRecipesBtn
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          to="/categories/breakfast"
        >
          <span>See recipes</span>
          <ArrowRight />
        </SeeRecipesBtn>
      </div>
      <HeroArrowIcon />
    </BreakfastContainer>
  );
}
