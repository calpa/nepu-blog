import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import { Link } from '../../routes';

const Style = () => (
  <style>{`
    span {
      background: #eee;
      font-size: 16px;
    }

    .PostCard {
      width: 500px;
      margin: 10px;
    }
  `}
  </style>
);

const PostCard = ({ title, tags, createdDate, url, urlDate }) => (
  <Link route={`/post/${urlDate}/${url}`}>
    <Card
      title={title}
      extra={createdDate}
      className="PostCard"
    >
      <div>
        <span>{tags}</span>
      </div>
      <Style />
    </Card>
  </Link>
);

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  urlDate: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PostCard;
