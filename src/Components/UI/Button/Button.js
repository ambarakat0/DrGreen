import React from 'react';
import classes from './Button.module.scss';
import icons from '../../../assets/icons.svg';

const button = ({ children, clicked }) => {
   return (
      <button onClick={clicked} className={classes.Button}>
         {children}
         <svg>
            <use href={`${icons}#icon-circle-right`} />
         </svg>
      </button>
   );
};

export default button;
