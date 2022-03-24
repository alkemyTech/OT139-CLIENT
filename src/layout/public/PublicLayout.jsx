import React from 'react';
import Header from './../../components/header/Header';
import { Footer } from './../../components/footer/Footer';
import { UserMenu } from '../../components/Backoffice/Menu/UserMenu';
import { LoginRegister } from '../../components/Backoffice/Menu/LoginRegister';

const Logged = ({ children }) => {
  return (
    <>
      {console.log('estoy en logged')}
      <Header Menu={UserMenu} />
      {children}
      <Footer />
    </>
  );
};

const Unlogged = ({ children }) => {
  return (
    <>
      {console.log('estoy en unlogged')}
      <Header Menu={LoginRegister} />
      {children}
      <Footer />
    </>
  );
};

export { Logged, Unlogged };
