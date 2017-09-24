import React from 'react';

const size = 5;

const LatestPostsArea = ({ posts }) => (
  <div>
    <h5 style={{
      textAlign: 'center',
    }}
    >最新文章</h5>
    <ul
      className="list-inline"
      style={{
        textAlign: 'center',
      }}
    >
      {posts
        .sort('date', -1)
        .slice(0, size)
        .map(post => (
          <li>
            <a href="<%- config.root %><%- post.path %>">
              {post.title || '未定義文章標題'}
            </a>
          </li>))
      }

      <hr />
    </ul>
  </div>
);

export default LatestPostsArea;
