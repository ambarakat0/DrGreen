import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../../Components/Pages/Home/Home';

const layout = () => {
   let routes = (
      <Switch>
         <Route to="/" component={Home} />
      </Switch>
   );
   return <main>{routes}</main>;
};

export default layout;
