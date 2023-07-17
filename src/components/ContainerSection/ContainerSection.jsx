import {
  BGContainer,
  Rectangle11,
  Rectangle9,
  // WrapperRectangle,
} from './ContainerSection.styled';
import { Rectangle8 } from './Rectangle8';

const ContainerSection = ({ children }) => {
  return (
    <BGContainer>
      {/* <WrapperRectangle> */}
      <Rectangle11 />
      <Rectangle9 />
      <Rectangle8 />
      {/* </WrapperRectangle> */}
      {children}
    </BGContainer>
  );
};

export default ContainerSection;
