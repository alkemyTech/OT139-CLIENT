import React from 'react';
import Header from './Header'; //Change path to real component
import { Footer } from './../../components/footer/Footer';

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
