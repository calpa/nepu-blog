import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

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

const PostCard = ({ title, tags, createdDate }) => (
  <Card title={title} extra={createdDate} className="PostCard">
    <div>
      <span>{tags}</span>
    </div>
    <Style />
  </Card>
);

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
};

export default PostCard;
