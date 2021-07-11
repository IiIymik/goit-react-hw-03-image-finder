import React from 'react';
import { BtnLoadMore } from './Button.styled.js';

function Button({onClick}) {
  const handelLoadMore = e => onClick();

  return (
    <BtnLoadMore type='button' onClick={handelLoadMore}>Load More</BtnLoadMore>
  )
}

export default Button
