import React, { Suspense, lazy } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Header from '../layout/Header';


// components
const Home = lazy(() => import('../pages/Home'));


const Main = withRouter(({ location }) => {
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header  location={location} />
      <Switch>
        <Route exact={true} path={'/'} component={Home} />
      </Switch>

    
    </Suspense>
  );
});

export default Main;
