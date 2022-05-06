import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// It changes bcz onclick props always changes when component renders

// javascript 
//object === object --is false
// 'hi' === 'hi --true
//false === false --true
//[1,2,3] === [1,2,3] -- true