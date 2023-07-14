import { PopUp } from 'components/PopUp/PopUp';
import { useState } from 'react';
import { WrapperUserLogo, UserPhoto, UserName } from './UserLogo.styled';

import { LogOut } from 'components/LogOut/LogOut';
import { UserProfile } from 'components/UserProfile/UserProfile';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { StyledPopover } from './Popover.styled';

const UserLogo = () => {
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleClick = event => {
    if (showLogOut || showUserProfile) {
      return;
    }
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const showModal = () => {
    setShowLogOut(true);
  };
  const closeModal = () => {
    setAnchorEl(null);
    setShowLogOut(false);
  };
  const closeUserProfile = () => {
    setShowUserProfile(false);
  };
  const showProfile = () => {
    setShowUserProfile(true);
  };
  const open = Boolean(anchorEl);

  return (
    <WrapperUserLogo onClick={handleClick}>
      <UserPhoto src={user.avatarURL} />
      <UserName>{user.name}</UserName>

      <StyledPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <PopUp showModal={showModal} showProfile={showProfile} />
      </StyledPopover>
      {showLogOut && <LogOut closeModal={closeModal} />}
      {showUserProfile && (
        <UserProfile closeUserProfile={closeUserProfile} user={user} />
      )}
    </WrapperUserLogo>
  );
};

export default UserLogo;
