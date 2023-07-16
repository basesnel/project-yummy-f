import { ReactComponent as EditSvg } from '../../assets/images/userProfile/edit.svg';

import { ArrowIcon, EditBtn, LogOutBtn, PopUpContainer } from './PopUp.styled';

export function PopUp({ showModal, showProfile }) {
  return (
    <PopUpContainer>
      <EditBtn onClick={showProfile}>
        <span>Edit profile</span>
        <EditSvg />
      </EditBtn>
      <div>
        <LogOutBtn onClick={showModal}>
          <span>Log out</span>
          <ArrowIcon />
        </LogOutBtn>
      </div>
    </PopUpContainer>
  );
}
