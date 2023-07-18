import veg_375_1x from '../../../assets/images/search/veg_375_1x.png';
import veg_375_2x from '../../../assets/images/search/veg_375_2x.png';
import veg_768_1x from '../../../assets/images/search/veg_768_1x.png';
import veg_768_2x from '../../../assets/images/search/veg_768_2x.png';
import { NoResultText, NoResultsWrapp } from './NoSearchResults.styled';
export const NoSearchResults = ({ text }) => {
  return (
    <NoResultsWrapp>
      <picture>
        <source
          srcSet={`${veg_768_1x} 1x,${veg_768_2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${veg_375_1x} 1x,${veg_375_2x} 2x`}
          media="(min-width: 375px)"
        />
        <img src={veg_375_1x} alt="Busket with vegetables" />
      </picture>
      <NoResultText>{text}</NoResultText>
    </NoResultsWrapp>
  );
};

// Try looking for something else..
