import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import Layout from '../layouts';
import { getAbout } from '../api';


const About = ({ content }) => (
  <Layout>
    <div>About</div>
    <button onClick={() => getAbout()} >Test</button>
    <ReactMarkdown source={content} />
  </Layout>
);

About.getInitialProps = async () => {
  const { data } = await getAbout();
  const { content } = data.items[0].fields;
  return { content };
  // return { input: data.data };
};

About.propTypes = {
  content: PropTypes.string,
};

About.defaultProps = {
  content: '# This is a header\n\nAnd this is a paragraph',
};

export default About;
