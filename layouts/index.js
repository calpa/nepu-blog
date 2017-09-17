import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <div>
    <NavBar />

    <div>
      {children}
    </div>

    <Footer />
  </div>
);

export default Layout;
