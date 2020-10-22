import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';
interface Propsi {
  childern: any;
}

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.baseWrapper}>{children}</div>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
