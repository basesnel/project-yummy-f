import {
  BGContainer,
  Rectangle11,
  Rectangle8,
  Rectangle9,
  WrapperRectangle,
} from './ContainerSection.styled';

const ContainerSection = ({ children }) => {
  return (
    <BGContainer>
      <WrapperRectangle>
        <Rectangle11 />
        <Rectangle9 />
        <Rectangle8 />
      </WrapperRectangle>
      {children}
    </BGContainer>
  );
};

export default ContainerSection;
