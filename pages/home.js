import React from 'react';
import moment from 'moment';
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
        title={item.title}
        tags={item.tags}
        createdDate={item.createdDate}
        key={item.id}
      />
    ))}
    <Style />
  </Layout>
);

Home.getInitialProps = async () => {
  const { data } = await getPosts();
  const items = data.items.map((item) => {
    if (item.sys.contentType.sys.id !== 'about') {
      const createdDate = moment(item.fields.createdDate).format('MMMM Do YYYY, h:mm a');

      return {
        title: item.fields.title,
        tags: item.fields.tags,
        createdDate,
        id: item.sys.id,
      };
    }

    return {
      title: '關於我',
      tags: 'calpa',
      createdDate: moment().format('MMMM Do YYYY, h:mm a'),
      id: item.sys.id,
    };
  }, []);


  return { items };
};

export default Home;
