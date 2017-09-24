import React from 'react';

// Next.js + Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

import Layout from '../layouts';

const Tags = ({ isServer }) => (
  <Layout>
    <div>
      <h1>Tags</h1>
      <div>Render in Server: { isServer === true ? 'true' : 'false' }</div>
    </div>

  </Layout>
);

Tags.getInitialProps = async ({ store, isServer }) => {
  console.log(store, isServer);
  return { isServer };
};

export default withRedux(initStore)(Tags);
