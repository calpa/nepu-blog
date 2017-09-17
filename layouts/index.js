import React from 'react';
import Head from 'next/head';

import { Layout } from 'antd';
import NavBar from '../components/navbar';

const { Header, Footer, Content } = Layout;

// import Footer from '../components/footer';

const CustomLayout = ({ children }) => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css" />
    </Head>
    <Header style={{ background: '#fff', height: '47px', lineHeight: '47px' }}>
      <NavBar />
    </Header>
    <Content>
      {children}
    </Content>

    <Footer>Footer</Footer>
  </Layout>
);

export default CustomLayout;
