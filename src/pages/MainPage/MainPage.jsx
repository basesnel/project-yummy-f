import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { Search } from 'components/Search/Search';

import { Hero, HeroTitle } from './MainPage.styled';

export default function MainPage() {
  return (
    <main>
      <Hero>
        <HeroTitle>
          <h1>SoYummy</h1>
          <p>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
        </HeroTitle>
        <ChooseYourBreakfast />
        <Search />
      </Hero>
      <PreviewCategories />
    </main>
  );
}
