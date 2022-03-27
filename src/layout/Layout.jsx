import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackOffice from './backOffice/BackOffice';
import { Logged, Unlogged } from './public/PublicLayout';
import { getUserDetails } from '../actions/userActions';
import { getUserInfo } from '../localStorage/storage';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userLogin = useSelector((state) => state.userLogin.logged);
  const userRegister = useSelector((state) => state.userRegister.logged);
  const userLogout = useSelector((state) => state.userLogout.logged);
  const { userInfo } = userDetails;
  
  useEffect(() => {
    console.log(userLogout)
    if (getUserInfo() && !userInfo) {
      dispatch(getUserDetails());
    }
  }, [dispatch, userInfo, userRegister, userLogin, userLogout]);

  return (
    <>
      {!userInfo ? (
        <Unlogged>{children}</Unlogged>
      ) : userInfo.isAdmin ? (
        <BackOffice>{children}</BackOffice>
      ) : (
        <Logged userInfo={ userInfo }>{children}</Logged>
      )}
    </>
  );
};

export default Layout;
