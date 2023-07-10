import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { PreviewCategories } from 'components/PreviewCategories/PreviewCategories';
import { Search } from 'components/Search/Search';

import { Hero, HeroTitle } from './MainPage.styled';

export default function MainPage() {
    return (
        <main>
            <Hero>
                <HeroTitle>
                    <div>
                        <h1>
                            <span>So</span>Yummy
                        </h1>
                        <p>
                            "What to cook?" is not only a recipe app, it is, in
                            fact, your cookbook. You can add your own recipes to
                            save them for the future.
                        </p>
                    </div>
                    <Search ver="tablet" />
                </HeroTitle>
                <ChooseYourBreakfast />
                <Search ver="mobile" />
            </Hero>
            <PreviewCategories />
        </main>
    );
}
