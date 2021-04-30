import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Like = ({ liked, onLike }) => {
  const cursor = { cursor: 'pointer' };
  return liked ? (
    <FaHeart onClick={onLike} style={cursor} />
  ) : (
    <FaRegHeart onClick={onLike} style={cursor} />
  );
};

export default Like;
