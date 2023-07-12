import { PopUp } from 'components/PopUp/PopUp';
import { useState } from 'react';
import { WrapperUserLogo, UserPhoto, UserName } from './UserLogo.styled';
import Popover from '@mui/material/Popover';
import { LogOut } from 'components/LogOut/LogOut';
import { UserProfile } from 'components/UserProfile/UserProfile';

const UserLogo = () => {
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
      <UserPhoto />
      <UserName>UserName</UserName>

      <Popover
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
      </Popover>
      {showLogOut && <LogOut closeModal={closeModal} />}
      {showUserProfile && <UserProfile closeUserProfile={closeUserProfile} />}
    </WrapperUserLogo>
  );
};

export default UserLogo;
