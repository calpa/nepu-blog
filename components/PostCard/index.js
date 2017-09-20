import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const Style = () => (
  <style jsx>{`
    span {
      background: #eee;
      font-size: 16px;
    }
  `}
  </style>
);

const PostCard = ({ title, tags, createdDate }) => (
  <Card title={title} extra={createdDate} >
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
