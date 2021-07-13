import React from 'react';
import { BtnLoadMore } from './Button.styled.js';

function Button({onClick}) {
  const handelLoadMore = e => {
      window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
    onClick();
  };

  return (
    <BtnLoadMore type='button' onClick={handelLoadMore}>Load More</BtnLoadMore>
  )
}

export default Button
