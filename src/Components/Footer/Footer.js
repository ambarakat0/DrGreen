import React from 'react';
import classes from './Footer.module.scss';
import icons from '../../assets/icons.svg';
import logo from '../../assets/imgs/logo.png';

const footer = () => {
   return (
      <footer className={classes.Footer}>
         <div className={classes.Footer__logo}>
            <img src={logo} alt="Dr Green logo" />
         </div>
         <div className={classes.Footer__icon}>
            <svg>
               <use href={`${icons}#icon-facebook`} />
            </svg>
            <svg>
               <use href={`${icons}#icon-instagram`} />
            </svg>
            <svg>
               <use href={`${icons}#icon-whatsapp`} />
            </svg>
         </div>
         <div className={classes.Footer__copywrite}>
            <p>
               &copy; design and developed by <em>Ambarakat</em>
            </p>
         </div>
      </footer>
   );
};

export default footer;
