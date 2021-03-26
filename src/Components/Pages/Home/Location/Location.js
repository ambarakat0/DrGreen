import React from 'react';
import classes from './Location.module.scss';
import Button from '../../../UI/Button/Button';

const location = () => {
   return (
      <section className={classes.FreeSection}>
         <div style={{ textAlign: 'end' }}>
            <iframe
               title="DrGreen"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426.45798986056656!2d29.948634301958986!3d31.23003926235764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5acbf39fb75%3A0xe8c8600824a1f9e7!2sDr%20Green%20Animal%20Hospital!5e0!3m2!1sen!2seg!4v1616699243680!5m2!1sen!2seg"
               width="600"
               height="450"
               allowFullScreen=""
               loading="lazy"
            ></iframe>
         </div>
         <div className={classes.FreeSection__content}>
            <div style={{ alignSelf: 'self-start', textAlign: 'start' }}>
               <h2 className={classes.FreeSection__content__textprimary}>
                  You can found us<span> here</span>
               </h2>
               <p className={classes.FreeSection__content__textsecondary}>
                  We are near you,
                  <span>you can found us in.</span>
                  26 El-Mosakr El-rowmany, next Raya, Alexandria
                  <span>
                     Our phone<strong> 0123456789</strong> if you can't reach us
                     we will direct you
                  </span>
               </p>
               <Button>Schedule Appointment</Button>
            </div>
         </div>
      </section>
   );
};

export default location;
