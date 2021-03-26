import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import FreeVisit from './FreeVisit/FreeVisit';
import Chat from './Chat/Chat';
import Location from './Location/Location';
import Services from './Services/Services';
const home = () => {
   return (
      <div>
         <Header />
         <FreeVisit />
         <Chat />
         <Location />
         <Services />
         <Footer />
      </div>
   );
};

export default home;
