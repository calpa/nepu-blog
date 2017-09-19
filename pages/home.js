import React from 'react';
import Layout from '../layouts';

import ss from './home.sass';

const Home = () => (
  <Layout>
    <div>Home</div>
    <div className={ss.example}>Example</div>
  </Layout>
);

export default Home;
