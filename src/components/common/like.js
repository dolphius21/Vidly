import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Like = (props) => {
  return props.isLiked ? (
    <FaHeart onClick={props.onLike} style={{ cursor: 'pointer' }} />
  ) : (
    <FaRegHeart onClick={props.onLike} style={{ cursor: 'pointer' }} />
  );
};

export default Like;
