import React, { Component } from 'react';
// import moment from 'moment';

import { Col } from 'antd';

// Next.js + Redux
import withRedux from 'next-redux-wrapper';
import { initStore, getAllPosts } from '../store';

import Layout from '../layouts';

import SideBar from '../components/SideBar';
import PostCard from '../components/PostCard';
// import { getPosts } from '../api';

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

// const Posts = ({ posts }) => (
class Posts extends Component {
  componentDidMount() {
    this.items = this.props.posts;
    console.log(this);
  }

  render() {
    return (
      <Layout>
        <div>
          <SideBar />
          <h1>博客文章</h1>
          <Col span={16}>
            {this.items.map(item => (
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
  }
}

Posts.getInitialProps = async ({ store }) => {
  await store.dispatch(getAllPosts());
  // console.log(store);
  return { posts: store.posts };
};

export default withRedux(initStore)(Posts);
