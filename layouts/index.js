import React from 'react';

import { Layout, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import NavBar from '../components/navbar';

const { Header, Footer, Content } = Layout;

// import Footer from '../components/footer';

const CustomLayout = ({ children }) => (
  <Layout>

    <Header style={{ background: '#fff', height: '47px', lineHeight: '47px' }}>
      <NavBar />
    </Header>
    <Content>
      <LocaleProvider locale={enUS}>
        {children}
      </LocaleProvider>
    </Content>

    <Footer>Footer</Footer>

  </Layout>
);

export default CustomLayout;
