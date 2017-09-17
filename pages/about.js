import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';
import CustomLayout from '../layouts';
import { getAbout } from '../api';


const About = ({ content }) => (
  <CustomLayout>
    <Row>
      <Col span={16} offset={4}>
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

export default About;
