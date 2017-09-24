import React from 'react';

const AllBlogPosts = ({ posts }) => (
  <div>
    <h5 style={{
      textAlign: 'center',
    }}
    >所有文章</h5>
    <ul style="text-align: center; list-style-type: none; padding: 0;">
      {posts.reduce((acc, curr) => {
        acc[curr.date.month()] += 1;
        return acc;
      }, new Array(12).fill(0)).reverse().forEach((month, index) => {
        if (month !== 0) {
          return (
            <li>
              <a href="<%- config.root %>archive/#2017-<%- 12 - index %>">
                {12 - index}月({month})
              </a>
            </li>
          );
        }
      })}
    </ul>
  </div>
);

export default AllBlogPosts;
