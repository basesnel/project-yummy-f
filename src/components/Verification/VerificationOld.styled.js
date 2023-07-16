import styled from 'styled-components';
import { SIZE } from 'constants';

export const WrapperSection = styled.div`
  @media screen and (min-width: ${SIZE.tablet}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${SIZE.mobile}) {
    letter-spacing: -0.24px;
  }
  @media screen and (min-width: ${SIZE.desctop}) {
    margin: 33.5px 0 0 0;
  }
`;

export const Button = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-left: 100px;
  text-decoration: none;
  max-width: 150px;
  max-height: 150px;
  color: black;
  border: 0 transparent;
  border-radius: 50px;
  background-color: rgba(100, 185, 219, 0.2);
  padding: 0px;
  text-align: center;
`;

export const Image = styled.img.attrs(props => ({
  src: 'https://static.vecteezy.com/system/resources/previews/010/451/469/non_2x/green-check-mark-icon-tick-symbol-in-green-color-illustration-free-vector.jpg',
  jsaction: 'VQAsE',
  class: 'r48jcc pT0Scc iPVvYb',
  style: 'max-width: 150px; height: 150px; margin: 0px; width: 150px;',
  alt: 'Green check mark icon. Tick symbol in green color, vector illustration.  10451469 Vector Art at Vecteezy',
  jsname: 'kn3ccd',
  ariaHidden: 'false',
}))`
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Title = styled.button`
  font-size: 100%;
  font-family: 'Roboto', sans serif;
  font-size: 24px;
  line-height: 1.75;
`;
