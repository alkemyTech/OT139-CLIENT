import React from 'react';
import Header from './../../components/header/Header';
import { Footer } from './../../components/footer/Footer.jsx';
import { AdminMenu } from '../../components/Backoffice/Menu/AdminMenu';

const BackOffice = ({ children }) => {
  return (
    <>
      <Header Menu={AdminMenu} />
      {children}
      <Footer />
    </>
  );
};

export default BackOffice;
