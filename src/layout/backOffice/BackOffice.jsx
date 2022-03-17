import React from 'react';
import Header from './Header.jsx'; //Change path to real component
import Footer from './Footer.jsx'; //Change path to real component

const BackOffice = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BackOffice;
