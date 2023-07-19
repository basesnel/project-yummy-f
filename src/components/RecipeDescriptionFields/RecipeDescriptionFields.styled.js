import Select from 'react-select';
import { styled } from 'styled-components';
import { SIZE, COLOR } from 'constants';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 67px;

  @media screen and (min-width: ${SIZE.tablet}) {
    flex-direction: row;
    width: 704px;
    gap: 32px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 800px;
    gap: 50px;
  }
`;

export const ImageHolder = styled.div`
  width: 279px;
  height: 268px;
  cursor: pointer;
  display: flex;
  margin: 0 auto;

  @media screen and (min-width: ${SIZE.desktop}) {
    width: 357px;
    height: 344px;
  }
`;

export const ImagePlaceholder = styled.img`
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const FileInput = styled.input`
  opacity: 0;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: 0;
  }
`;

export const InputField = styled.input`
  padding: 0 0 19px 0;
  font-size: 14px;
  height: 40px;
  width: 100%;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background: inherit;

  @media screen and (min-width: ${SIZE.tablet}) {
    font-size: 16px;
    margin-bottom: 32px;
    height: 43px;
  }

  @media screen and (min-width: ${SIZE.desktop}) {
    margin-bottom: 40px;
  }
`;

export const StyledSelect = styled(Select)`
  .Select__control {
    border: none;
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 24px;
    font-size: 14px;
    height: 40px;
    align-items: baseline;
    cursor: pointer;
    background: inherit;

    @media screen and (min-width: ${SIZE.tablet}) {
      font-size: 16px;
      margin-bottom: 32px;
      height: 43px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      margin-bottom: 40px;
    }
  }

  .Select__control:hover {
    border-bottom: 1px solid #e0e0e0;
  }

  .Select__placeholder,
  .Select__value-container,
  .Select__input-container {
    padding: 0;
    margin: 0;
  }
  .Select__value-container {
    height: 21px;

    @media screen and (min-width: ${SIZE.tablet}) {
      height: 24px;
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__single-value {
    text-align: right;
    margin: 0;
  }

  .Select__indicators {
    margin-left: 8px;
    height: 20px;

    @media screen and (min-width: ${SIZE.tablet}) {
      height: 24px;
    }
  }

  .Select__indicator {
    padding: 0;
    color: ${COLOR.main};
  }

  .Select__menu {
    width: 123px;
    height: 144px;
    margin: 0;
    padding: 0;
    overflow: scroll;
    font-size: 12px;
    line-height: normal;
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    right: 0;
    top: 26px;
    border-radius: 6px;
    outline: none;
    border-color: #fff;
    background-color: #fff;
    box-shadow: 0px 6.52px 7.82px rgba(0, 0, 0, 0.0314);

    @media screen and (min-width: ${SIZE.tablet}) {
      width: 132px;
      height: 162px;
      font-size: 14px;
      top: 30px;
    }

    @media screen and (min-width: ${SIZE.desktop}) {
      right: -19px;
    }
  }

  .Select__menu-list {
    margin: 4px 4px 0 0;
    padding: 4px 0 0 0;
    height: inherit;
  }

  .Select__option {
    margin: 0 0 4px 0;
    padding: 1px 0 1px 14px;
    cursor: pointer;

    @media screen and (min-width: ${SIZE.tablet}) {
      padding: 0 0 0 18px;
    }
  }

  #react-select-2-option-13 {
    margin-bottom: 10px;
  }

  .Select__menu-list::-webkit-scrollbar {
    width: 4px;
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

export const InputErrorHandle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ErrorField = styled.div`
  position: absolute;
  margin-top: -40px;
  margin-left: 40px;
  font-size: 12px;
  color: orange;

  @media screen and (min-width: ${SIZE.tablet}) {
    margin-top: -50px;
  }
`;
