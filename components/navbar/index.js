import React from 'react';
// import Link from 'next/link';

// Global variables
const config = {
  title: 'Calpa',
};

const page = '';
const site = {
  pages: [{ path: 'path', title: 'title' }],
};


const isPost = () => false;
const isTag = () => true;
const isHome = () => true;

const NavBar = () => (
  <nav
    className={'navbar', 'navbar-default', 'navbar-custom', 'navbar-fixed-top', isPost() ? '' : 'is-fixed'}
    id="nav-top"
    data-ispost={isPost()}
    data-istags={isTag()}
    data-ishome={isHome()}
  >
    <div className="container-fluid">
      <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand animated pulse" href="/">
          <span className="brand-logo">{config.title }</span>
          <span className="brand-blog">'s Blog</span>
        </a>
      </div>

      <div id="huxblog_navbar">
        <div className="navbar-collapse">
          <ul className="nav navbar-nav navbar-center title-calpa display-none">
            <li>
              <a href="/">
                { page.title || 'home'}
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href={config.root}>Home</a>
            </li>
            {site.pages.forEach(p => (
              <li>
                <a href="<{ config.root }<{ p.path.replace('index.html', '') }">
                  { p.title }
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
