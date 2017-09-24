import React from 'react';

// Next.js + Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

import Layout from '../layouts';

const Archive = () => (
  <Layout>
    <div>Archive</div>
  </Layout>
);

export default withRedux(initStore)(Archive);
