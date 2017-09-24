import React from 'react';
import FontAwesome from 'react-fontawesome';

export const RSS = () => (
  <li>
    <a
      target="_blank"
      href="/feed.xml"
      rel="noopener noreferrer"
    >
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fa fa-rss fa-stack-1x fa-inverse" />
      </span>
    </a>
  </li>
);

export const Twitter = ({ twitter }) => (
  <li>
    <a
      target="_blank"
      href={`https://twitter.com${twitter}`}
      rel="noopener noreferrer"
    >
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fa fa-twitter fa-stack-1x fa-inverse" />
      </span>
    </a>
  </li>
);

export const ZhiHu = ({ zhihu }) => (
  <a
    target="_blank"
    href={`https://www.zhihu.com/people/${zhihu}`}
    rel="noopener noreferrer"
  >
    <span className="fa-stack fa-lg">
      <i className="fa fa-circle fa-stack-2x" />
      <i className="fa  fa-stack-1x fa-inverse">知</i>
    </span>
  </a>
);

export const WeiBo = () => (
  <li>
    <a
      target="_blank"
      href="http://weibo.com/<%= config.weibo_username %>"
      rel="noopener noreferrer"
    >
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fa fa-weibo fa-stack-1x fa-inverse" />
      </span>
    </a>
  </li>
);

export const Facebook = () => (
  <li>
    <a target="_blank" href="https://www.facebook.com/<%= config.facebook_username %>" rel="noopener noreferrer">
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fa fa-facebook fa-stack-1x fa-inverse" />
      </span>
    </a>
  </li>
);

export const Github = ({ github }) => (
  <a
    target="_blank"
    href={`https://github.com/${github}`}
    rel="noopener noreferrer"
    className="fa-stack fa-lg"
  >
    <FontAwesome
      name="github"
      size="2x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />
  </a>
);

export const LinkedIn = () => (
  <a
    target="_blank"
    href="https://www.linkedin.com/in/<%= config.linkedin_username %>"
    rel="noopener noreferrer"
  >
    <span className="fa-stack fa-lg">
      <i className="fa fa-circle fa-stack-2x" />
      <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
    </span>
  </a>
);

const Social = ({ rss, twitter, facebook, github, zhihu }) => (
  <div>
    {rss && <RSS rss={rss} />}
    {twitter && <Twitter twitter={twitter} />}
    {facebook && <Facebook facebook={facebook} />}
    {github && <Github github={github} />}
    {zhihu && <ZhiHu zhihu={zhihu} />}
  </div>
);

export default Social;
