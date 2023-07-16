import React from 'react';
import { components } from 'react-select';

const CustomValueContainer = ({ children, ...props }) => {
  const { ValueContainer, Placeholder } = components;

  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, child =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

export default CustomValueContainer;
