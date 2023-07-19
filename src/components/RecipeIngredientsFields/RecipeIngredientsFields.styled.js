import { styled } from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';

import { SIZE, COLOR } from 'constants';

export const SectionContainer = styled.div`
  margin-bottom: 44px;
  width: 100%;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 609px;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  color: #3e4462;
`;

export const SectionTitle = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 32px;
  }
`;

export const CounterContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  width: 92px;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 14px;
`;

export const MinusButton = styled.button`
  margin: 0;
  padding: 7px 7px 7px 14px;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  border: none;
  background-color: transparent;
`;

export const PlusButton = styled.button`
  margin: 0;
  padding: 7px 14px 7px 7px;
  display: flex;
  align-items: center;
  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  border: none;
  background-color: transparent;
`;

export const FieldsContainer = styled.div`
  width: 100%;
`;

export const InputRaw = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  font-size: 14px;
  color: #23262a;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-bottom: 24px;
    height: 59px;
    font-size: 18px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const SelectField = styled(Select)`
  .Select__control {
    display: inline-flex;
    width: 194px;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: 14px;
    background-color: rgba(217, 217, 217, 0.157);
    border-color: transparent;
    border-radius: 6px;
    box-shadow: none;
    cursor: pointer;

    @media screen and (min-width: ${SIZE.tablet}) {
      width: 398px;
      margin-right: 32px;
    }
  }

  .Select__control:hover {
    border-color: transparent;
  }

  .Select__value-container {
    padding: 0;
    margin: 0;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    padding: 0;
    color: ${COLOR.main};
  }

  .Select__menu {
    width: 194px;
    height: 154px;
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    outline: none;
    border-color: #fff;
    background-color: #fff;
    box-shadow: 0px 6.52px 7.82px rgba(0, 0, 0, 0.0314);

    @media screen and (min-width: ${SIZE.tablet}) {
      width: 398px;
      height: 172px;
      font-size: 14px;
    }
  }

  .Select__menu-list {
    width: 100%;
    height: 100%;
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    overflow-y: scroll;
  }

  .Select__option {
    margin: 0;
    padding: 3px 0 3px 18px;
    height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: ${SIZE.tablet}) {
      height: 27px;
    }
  }

  .Select__menu-list::-webkit-scrollbar {
    width: 6px;
  }

  .Select__menu-list::-webkit-scrollbar-track {
    background: #fff;
  }

  .Select__menu-list::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
    height: 93px;
  }
`;

export const InputField = styled(Field)`
  height: 100%;
  width: 84px;
  background-color: rgba(217, 217, 217, 0.157);
  border-color: transparent;
  border-radius: 6px;
  padding: 16px;

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 97px;
  }

  @media screen and (min-width: ${SIZE.tablet}) {
    width: 99px;
  }
`;

export const ButtonRemove = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const IngredientError = styled.div`
  position: absolute;
  margin-top: 55px;
  left: 40px;
  font-size: 12px;
  color: orange;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 60px;
  }
`;

export const AmountError = styled.div`
  position: absolute;
  margin-top: 55px;
  left: 210px;
  font-size: 12px;
  color: orange;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 60px;
    left: 439px;
  }
`;
