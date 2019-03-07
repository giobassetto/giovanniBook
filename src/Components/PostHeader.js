import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postheader">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="user-container">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
