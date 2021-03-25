import React from 'react';
import classes from './Nav.module.scss';
import Logo from '../../assets/imgs/logo.png';
import NavList from './NavList/NavList';

const nav = () => {
   return (
      <nav>
         <div className={classes.Nav}>
            <img src={Logo} alt="Dr Green logo" className={classes.Nav__logo} />
            <NavList />
         </div>
      </nav>
   );
};

export default nav;
