import React from 'react';
import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';

const navItem = ({ link, children }) => {
   return (
      <li className={classes.NavItem}>
         <NavLink to={link}>{children}</NavLink>
      </li>
   );
};

export default navItem;
