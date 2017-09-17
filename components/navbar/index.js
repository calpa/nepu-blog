import React, { Component } from 'react';
import Router from 'next/router';
import { Menu, Icon } from 'antd'; /* Antd */

const handleClick = (e) => {
  console.log(e);
  Router.push(`/${e.key}`);
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'horizontal',
      theme: 'light',
      loading: false,
      registermodalvisible: false,
      loginmodalvisible: false,
      collapsed: false,
    };
  }

  render() {
    return (
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />Home
        </Menu.Item>
        <Menu.Item key="tags">
          <Icon type="tags" />Tags
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="user" />About
        </Menu.Item>
        <Menu.Item key="archive">
          <Icon type="api" />Archive
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
