import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <Nav />
    <GlobalStyles />
    {children}
    <Footer />
  </>
);

export default Layout;
