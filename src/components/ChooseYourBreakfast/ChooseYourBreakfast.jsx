import {
  ArrowRight,
  BreakfastContainer,
  HeroArrowIcon,
  SeeRecipesBtn,
} from './ChooseYourBreakfast.styled';
import WrapBreakfast from './WrapBreakfast';

export function ChooseYourBreakfast() {
  return (
    <BreakfastContainer>
      {/* <div> */}
      <WrapBreakfast>
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
      </WrapBreakfast>
      {/* </div> */}
      <HeroArrowIcon />
    </BreakfastContainer>
  );
}
