import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore, startClock, serverRenderClock } from '../store';
import Page from '../components/Page';

class Counter extends Component {
  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Page title="Index Page" linkTo="/other" />
    );
  }
}

Counter.getInitialProps = async ({ store, isServer }) => {
  store.dispatch(serverRenderClock(isServer));

  return { isServer };
};

const mapDispatchToProps = dispatch => ({
  startClock: bindActionCreators(startClock, dispatch),
});

export default withRedux(initStore, null, mapDispatchToProps)(Counter);
