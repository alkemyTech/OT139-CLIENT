import BackOffice from './backOffice/BackOffice';
import { Logged, Unlogged } from './public/PublicLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import { getUserDetails } from '../actions/userActions';
import { getUserInfo } from '../localStorage/storage';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  useEffect(() => {
    if (getUserInfo()) {
      if (!userInfo) {
        dispatch(getUserDetails());
      }
    }
  }, [dispatch, userInfo]);
  return (
    <>
      {console.log(userInfo)}
      {!userInfo ? (
        <Unlogged>{children}</Unlogged>
      ) : userInfo.roleId == 1 ? (
        <BackOffice>{children}</BackOffice>
      ) : (
        <Logged>{children}</Logged>
      )}
    </>
  );
};

export default Layout;
