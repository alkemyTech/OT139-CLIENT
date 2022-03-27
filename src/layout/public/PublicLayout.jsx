import React from 'react';
import Header from './../../components/header/Header';
import { Footer } from './../../components/footer/Footer';
import { UserMenu } from '../../components/Backoffice/Menu/UserMenu';
import { LoginRegister } from '../../components/LoginRegisterButtons/LoginRegister';

const Logged = ({userInfo, children }) => {
  return (
    <>
      <Header Menu={UserMenu} userInfo={userInfo} />
      {children}
      <Footer />
    </>
  );
};

const Unlogged = ({ children }) => {
  return (
    <>
      <Header Menu={LoginRegister} />
      {children}
      <Footer />
    </>
  );
};

export { Logged, Unlogged };
