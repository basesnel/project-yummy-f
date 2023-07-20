import { PopUp } from 'components/PopUp/PopUp';
import { useEffect, useState } from 'react';
import {
  WrapperUserLogo,
  UserPhoto,
  UserName,
  StyledPopover,
} from './UserLogo.styled';

import { LogOut } from 'components/LogOut/LogOut';
import { UserProfile } from 'components/UserProfile/UserProfile';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material';
import { TRANSITION } from 'constants';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { SIZE } from 'constants';
import { COLOR } from 'constants';
import { StyleSheetManager } from 'styled-components';

const UserLogo = () => {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${SIZE.desktop})`,
  });
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    setIsColor(isDesktop && pathname === '/main');
  }, [isDesktop, pathname]);

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
  const theme = useTheme();

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <WrapperUserLogo onClick={handleClick}>
        <UserPhoto src={user.avatarURL} />
        <UserName
          style={{
            color: isColor ? COLOR.dark : theme.palette.text.primary,
            transition: TRANSITION.forHoverColor,
          }}
        >
          {user.name}
        </UserName>

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
    </StyleSheetManager>
  );
};

export default UserLogo;
