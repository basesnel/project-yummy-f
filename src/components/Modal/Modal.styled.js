import styled from 'styled-components';
import modalMob from '../../assets/images/modal/spinachMob.png';
import modalMobRetina from '../../assets/images/modal/spinachMob@2x.png';
import modalTab from '../../assets/images/modal/spinachTab.png';
import modalTabRetina from '../../assets/images/modal/spinachTab@2x.png';
import { SIZE, COLOR } from 'constants';

export const ModalContainer = styled.div`
  padding: 24px 22px;
  width: 100vw;
  height: 100vh;
  background-color: #ebf3d4;
  background-image: url('${modalMob}');
  background-position: right bottom;
  background-repeat: no-repeat;

  position: fixed;
  top: 0;
  right: 0;

  z-index: 100;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${modalMobRetina}');
  }

  @media screen and (min-width: ${SIZE.mobile}) {
    background-image: url('${modalTab}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${modalTabRetina}');
    }
  }
`;

export const TopFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  width: 32px;
  height: 32px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    fill: ${COLOR.hover};
  }
`;

export const NavigationContainer = styled.div`
  color: ${COLOR.dark};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
