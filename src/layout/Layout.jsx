import BackOffice from './backOffice/BackOffice';
import { Logged, Unlogged } from './public/PublicLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import React from 'react';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  //implementar userDetailsReducer despues de que
  //se mergee ticket #43
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo, loading, error } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      //esperar merge de ticket #43
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
