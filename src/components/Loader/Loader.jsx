import { Oval } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';
import { main } from 'constants/colors';

const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        height={60}
        width={60}
        color={main}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={main}
        strokeWidth={4}
        strokeWidthSecondary={2}
      />
    </LoaderContainer>
  );
};

export default Loader;
