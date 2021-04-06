import React from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

import { Route } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/About" component={AboutPage} exact/>
    </div>
  );
}

export default Routes;