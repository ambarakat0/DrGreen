import React from 'react';
import Nav from '../Nav/Nav';
import Button from '../UI/Button/Button';
import classes from './Header.module.scss';

const header = () => {
   return (
      <div className={classes.Header}>
         <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
            <Nav />
         </div>
         <div className={classes.Header__text}>
            <h1 className={classes.Header__primary}>
               petcare is essential,<span>that's why we're here</span>
            </h1>
            <p className={classes.Header__secondary}>
               See our hours and get the support,
               <span>services, and updates you need most.</span>
            </p>
            <Button>What we offer!</Button>
         </div>
      </div>
   );
};

export default header;
