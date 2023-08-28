import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import TokenService from 'services/token.service';
import { useRouter } from 'next/router';
import { UserContext } from 'providers/userContext';
import styles from './Sidebar.module.scss';
import SearchIcon from 'assets/icons/search';
import EventIcon from 'assets/icons/event';
import PersonIcon from 'assets/icons/person';
import PenToSquareIcon from 'assets/icons/pen-to-square';
import LogoutIcon from 'assets/icons/logout';
import ChecklistIcon from 'assets/icons/check-list';
import Divider from 'elements/Divider';
import { Box, Typography } from '@mui/material';

const Sidebar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const [user, setUser] = useContext(UserContext) as any;
  const [openLogout, setOpenLogout] = useState(false);
  const [openPageNotExist, setOpenPageNotExist] = useState(false);

  const showPopUpLogout = () => {
    setOpenLogout(true);
  };

  const showPopUpPageNotExist = () => {
    if (!TokenService.getToken()) {
      router.push({ pathname: '/register-technology' });
    } else {
      setOpenPageNotExist(true);
    }
  };

  const handleConfirmLogout = () => {
    setOpenLogout(false);
    logOut();
  };

  const handleCloseLogout = () => {
    setOpenLogout(false);
  };

  const handleConfirmPageNotExist = () => {
    setOpenPageNotExist(false);
    router.push({ pathname: '/' });
  };

  const handleClosePageNotExist = () => {
    setOpenPageNotExist(false);
    router.push({ pathname: '/' });
  };

  const logOut = () => {
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    setUser({});
    router.push('/signin');
  };

  useEffect(() => {
    const user = TokenService.getToken();
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  const renderItem = () => {
    if (user.user_type === 'producer') {
      return (
        <Link href="/register-technology">
          <a className={styles.a}>판매 기술등록</a>
        </Link>
      );
    } else if (user.user_type === 'agent') {
      return (
        <Link href="/approval">
          <a className={styles.a}>가입 승인</a>
        </Link>
      );
    } else {
      return (
        <a className={styles.a} onClick={showPopUpPageNotExist}>
          수요 기술등록
        </a>
      );
    }
  };

  return (
    <Box className={styles.sidenav}>
      <Box className={styles.logo}>
        <Link href="/">
          <a>Hello</a>
        </Link>
      </Box>
      <Divider />
      <Box className={styles.menu}>
        <Box className={styles.sidebar_item}>
          <SearchIcon />
          <Link href="/">
            <a className={styles.a}>기술 검색</a>
          </Link>
        </Box>
        <Box className={styles.sidebar_item}>
          <EventIcon />
          <Link href="/transactions">
            <a className={styles.a}>거래 관리</a>
          </Link>
        </Box>
        <Box className={styles.sidebar_item}>
          {user.user_type === 'agent' ? <ChecklistIcon /> : <PenToSquareIcon />}
          {renderItem()}
        </Box>
      </Box>
      <Box className={styles.account}>
        <Divider />
        <Box className={styles.bottom}>
          {isLogin ? (
            <Box className={styles.sidebar_item}>
              <LogoutIcon />
              <a onClick={showPopUpLogout} className={styles.log_out}>
                로그인 / 회원가입
              </a>
            </Box>
          ) : (
            <Box className={styles.sidebar_item}>
              <PersonIcon />
              <Link href="/signin">
                <a className={styles.a}>로그인/회원가입</a>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
