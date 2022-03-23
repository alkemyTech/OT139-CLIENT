import React from 'react';
import Header from './../../components/header/Header';
import { Footer } from './../../components/footer/Footer';

const Logged = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

const Unlogged = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export { Logged, Unlogged };
