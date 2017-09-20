import React from 'react';
import Layout from '../layouts';

import PostCard from '../components/PostCard';
import { getPosts } from '../api';

// Use styled-jsx to style the component
const Style = () => (
  <style jsx>{`
    h1 {
      fontSize: 36px;
      background: #6cf;
    }
  `}
  </style>
);

const Home = ({ items }) => (
  <Layout>
    <h1>Home</h1>

    {items.map(item => (
      <PostCard
        title={item.fields.title}
        tags={item.fields.tags}
        createdDate={item.fields.createdDate}
        key={item.sys.id}
      />
    ))}
    <Style />
  </Layout>
);

Home.getInitialProps = async () => {
  const { data } = await getPosts();
  const items = data.items;
  return { items };
};

export default Home;
