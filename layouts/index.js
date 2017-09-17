import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css" />
    </Head>
    <NavBar />

    <div>
      {children}
    </div>

    <Footer />
  </div>
);

export default Layout;
