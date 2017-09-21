import React from 'react';
import Layout from '../layouts';

const Post = ({ post }) => (
  <Layout>
    <div>
      <h1>文章</h1>
      {post}
    </div>
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  console.log(query);
  return { post: query.slug };
};


export default Post;
