import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from './Chat.module.scss';
import img from '../../../../assets/imgs/chat.png';

const chat = () => {
   return (
      <section className={classes.FreeSection}>
         <div style={{ textAlign: 'end' }}>
            <div className={classes.FreeSection__img}>
               <img src={img} alt="man with his dog" />
            </div>
         </div>
         <div className={classes.FreeSection__content}>
            <div style={{ alignSelf: 'self-start', textAlign: 'start' }}>
               <h2 className={classes.FreeSection__content__textprimary}>
                  talk to a vet<span> without leaving the house</span>
               </h2>
               <p className={classes.FreeSection__content__textsecondary}>
                  If you've got any issue with your pet,{' '}
                  <span>
                     you can get in touch with and start chatting now with your
                     doctor.
                  </span>
                  Get general pet care advice and support, 24/7.
                  <span>
                     Start chatting throught whatsapp using
                     <strong> 0123456789</strong>
                  </span>
               </p>
               <Button>Start Chatting!</Button>
            </div>
         </div>
      </section>
   );
};

export default chat;
