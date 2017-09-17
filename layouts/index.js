import React from 'react';

import { Layout } from 'antd';
import NavBar from '../components/navbar';

const { Header, Footer, Content } = Layout;

// import Footer from '../components/footer';

const CustomLayout = ({ children }) => (
  <Layout>
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
