import React from 'react';
import classes from './FreeVisit.module.scss';
import img from '../../../../assets/imgs/get_free_visit.jpg';

import Button from '../../../UI/Button/Button';

const freeVisit = () => {
   return (
      <section className={classes.FreeSection}>
         <div className={classes.FreeSection__content}>
            <h2 className={classes.FreeSection__content__textprimary}>
               we.<span>love.</span>pets.
            </h2>
            <p className={classes.FreeSection__content__textsecondary}>
               We'd love to meet yours. So much so, your
               <span>first visit is on us.</span>
            </p>
            <Button>Get Your Free Visit</Button>
         </div>
         <div className={classes.FreeSection__img}>
            <img src={img} alt="man with his dog" />
         </div>
      </section>
   );
};

export default freeVisit;
