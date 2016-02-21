import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import { default as MissionsBoardLayout } from '../containers/missions/board';
import { default as IndexLayout } from '../containers/index';
import { default as DefaultLayout } from '../containers/404';

import { default as ApplicationLayout } from '../containers/Application';

export default (
  <Route path="/" component={ApplicationLayout}>
    <IndexRoute component={IndexLayout} />

    <Route path='/404' component={DefaultLayout} />

    <Route path="/missions" component={MissionsBoardLayout}/>
    <Redirect from='*' to='/404' />
  </Route>
);
