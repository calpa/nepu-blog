import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

// Next.js + Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

import SideBar from '../components/SideBar';

import CustomLayout from '../layouts';
import { getAbout } from '../api';


const About = ({ content }) => (
  <CustomLayout>
    <Row>
      <SideBar />
      <Col span={16}>
        <ReactMarkdown source={content} />
      </Col>
    </Row>
  </CustomLayout>
);

About.getInitialProps = async () => {
  const { data } = await getAbout();
  const { content } = data.items[0].fields;
  return { content };
};

About.propTypes = {
  content: PropTypes.string,
};

About.defaultProps = {
  content: '# This is a header\n\nAnd this is a paragraph',
};

export default withRedux(initStore)(About);
