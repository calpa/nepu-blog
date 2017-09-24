import React from 'react';

import { Col } from 'antd';

import FeaturedTag from '../FeaturedTag';
import Description from '../Description';

import Social from '../Social';

const config = {
  author: 'Calpa',
  github: 'calpa',
  zhihu: 'piao-xue-wu-ying',
};

const tags = ['React', 'JavaScript'];

const SideBar = () => (
  <Col lg={5} md={5} sm={5} xs={5}>
    <section
      className="visible-md visible-lg"
      style={{
        padding: '0 18px',
      }}
    >
      <div className="short-about">
        {/* 侧边栏头像 */}
        <img src="/static/profile.png" alt="avatar" />
        <h5>{config.author}</h5>
        {/* 關於我的一言兩句 */}
        <Description />
        <hr />

        {/* 跳轉到搜尋 */}
        <input href="/search" placeholder="搜尋博客內容" id="customSearch" /> {/* SNS Link 社交 */}

        <Social
          github={config.github}
          zhihu={config.zhihu}
        />
      </div>
    </section>
    {/* Featured Tags */}
    <FeaturedTag tags={tags} />
    <hr />

    {/* <Friends /> */}

    <hr />
    {/* Latest Blog Post */}

    <h5 style={{ textAlign: 'center', color: '#808080' }}>
      共5篇文章
    </h5>
    <hr />
    {/* <AllBlogPosts /> */}

    <style jsx>{`
      img {
        width: 100%;
        display: block;
        border-radius: 50%;
        margin-bottom: 20px;
        box-shadow: 0 0 2px black;
      }

      hr {
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
        height: 0;
        box-sizing: content-box;
      }
      `}
    </style>
  </Col>
);

export default SideBar;
