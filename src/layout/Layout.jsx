import BackOffice from './backOffice/BackOffice';
import { Logged, Unlogged } from './public/PublicLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import React from 'react';
import { getUserDetails } from '../actions/userActions';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      dispatch(getUserDetails());
    }
  }, [dispatch, userInfo]);
  return (
    <>
      {!userInfo ? (
        <Unlogged>{children}</Unlogged>
      ) : userInfo.isAdmin ? (
        <BackOffice>{children}</BackOffice>
      ) : (
        <Logged>{children}</Logged>
      )}
    </>
  );
};

export default Layout;
