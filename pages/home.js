import React from 'react';
import Layout from '../layouts';

import { getPosts } from '../api';

import ss from './home.sass';

const Home = ({ data }) => (
  <Layout>
    <div>Home</div>
    <div className={ss.example}>Example</div>
    {data.items.map(item => (
      <div>
        <h2>{item.fields.title}</h2>
        <span>{item.fields.tags}</span>
      </div>
    ))}
  </Layout>
);

Home.getInitialProps = async () => {
  const { data } = await getPosts();
  return { data };
};

export default Home;
