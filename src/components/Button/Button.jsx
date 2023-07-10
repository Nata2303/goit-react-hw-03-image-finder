import React from 'react';
import style from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={style.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
