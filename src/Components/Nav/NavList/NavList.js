import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './NavList.module.scss';
import icons from '../../../assets/icons.svg';

const navList = () => {
   return (
      <ul className={classes.NavList}>
         <NavItem link="/">Home</NavItem>
         <NavItem link="/">Clients</NavItem>
         <NavItem link="/">Profile</NavItem>
         <NavItem link="/">
            <div className={classes.Sign}>
               <svg>
                  <use href={`${icons}#icon-user`} />
               </svg>
            </div>
         </NavItem>
      </ul>
   );
};

export default navList;
