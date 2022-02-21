import React from 'react';

//Mock header
const Header = () => {
  return <>header</>;
};

//Mock footer
const Footer = () => {
  return <>footer</>;
};

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
