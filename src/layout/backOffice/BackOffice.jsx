import React from 'react';
import Header from './../../components/header/Header';
import { Footer } from './../../components/footer/Footer.jsx';

const BackOffice = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default BackOffice;
