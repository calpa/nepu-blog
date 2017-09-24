import React from 'react';
import moment from 'moment';

import { Col } from 'antd';

import Layout from '../layouts';

import SideBar from '../components/SideBar';
import PostCard from '../components/PostCard';
import { getPosts } from '../api';

// Use styled-jsx to style the component
const Style = () => (
  <style>{`
    h1 {
      fontSize: 36px;
      background: #6cf;
    }
  `}
  </style>
);

const Post = ({ items }) => (
  <Layout>
    <div>
      <SideBar />
      <h1>博客文章</h1>
      <Col span={16}>
        {items.map(item => (
          <PostCard
            title={item.title}
            tags={item.tags}
            createdDate={item.createdDate}
            url={item.url}
            urlDate={item.urlDate}
            key={item.id}
          />
        ))}
      </Col>
      <Style />
    </div>
  </Layout>
);

Post.getInitialProps = async () => {
  const { data } = await getPosts();
  const items = data.items.map((item) => {
    if (item.sys.contentType.sys.id !== 'about') {
      const { title, tags, url, createdDate } = item.fields;

      const date = moment(createdDate).format('MMMM Do YYYY, h:mm a');
      const urlDate = moment(createdDate).format('YYYY/MM/DD');
      return {
        title,
        tags,
        url,
        urlDate,
        createdDate: date,
        id: item.sys.id,
      };
    }

    return {
      title: '關於我',
      tags: 'calpa',
      id: item.sys.id,
      url: 'about',
      urlDate: moment().format('MMMM Do YYYY, h:mm a'),
      createdDate: item.sys.createdDate,
    };
  }, []);

  return { items };
};

export default Post;
