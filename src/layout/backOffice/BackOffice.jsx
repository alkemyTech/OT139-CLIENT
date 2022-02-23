import React from 'react';
import Header from './Header'; //Change path to real component
import Footer from './Footer'; //Change path to real component

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
