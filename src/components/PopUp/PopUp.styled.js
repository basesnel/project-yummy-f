import { TRANSITION } from 'constants';
import { COLOR } from 'constants';
import { styled } from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../assets/images/userProfile/arrow-right.svg';
import { SIZE } from 'constants';

export const PopUpContainer = styled.div`
    width: 161px;
    heigth: 130px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 18px;
    border-radius: 8px;
    border: 1px solid ${COLOR.main};
    background: ${COLOR.second};
    @media screen and (min-width: ${SIZE.tablet}) {
        width: 177px;
        heigth: 134px;
        gap: 32px;
    }
`;
export const LogOutBtn = styled.button`
     padding: 12px 24px 12px 27px;
     width:125px;
    border-radius: 24px 44px;
    border: none;
    display: flex;
   gap:4px;
    align-items: center;
    background-color: ${COLOR.main};
    font-size:14px;
    color: ${COLOR.second};
     transition: ${TRANSITION.forHoverBgColor};
    &: hover, 
    &:focus{
        background-color:${COLOR.dark};
    }
     @media screen and (min-width: ${SIZE.tablet}){
        width:141px;
        padding: 12px 32px 12px 35px;
     } 
`;

export const EditBtn = styled.button`
    all: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${COLOR.dark};
    font-weight: 500;
    line-height: 22.4px;
    svg {
        width: 14px;
        heigth: 14px;

        transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover svg,
    &:focus svg {
        fill: ${COLOR.main};
    }
`;

export const ArrowIcon = styled(ArrowSvg)`
    height: 18px;
    width: 18px;
`;
