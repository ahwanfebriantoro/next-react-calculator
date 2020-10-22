import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Propsi {
  childern: any;
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
export default Layout;
