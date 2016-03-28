import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import { default as MissionsBoardLayout } from '../containers/missions/board';
import { default as IndexLayout } from '../containers/index';
import { default as DefaultLayout } from '../containers/404';

import { default as LoginLayout }     from '../containers/auth/login';
import { default as RegisterLayout }  from '../containers/auth/register';

import { default as ApplicationLayout } from '../containers/Application';
import { store } from '../store';

import { routeActions } from 'react-router-redux';

function checkAuth() {
  const { authentication } = store.getState();

  if (!authentication.isLoggedIn) {
    store.dispatch(routeActions.push('/login'));
  }
}

export default (
  <Route path="/" component={ApplicationLayout}>
    <IndexRoute component={IndexLayout} />

    <Route path='/404' component={DefaultLayout} />

    <Route path="/login" component={LoginLayout} />
    <Route path="/register" component={RegisterLayout} />

    <Route onEnter={checkAuth}>
      <Route path="/missions" component={MissionsBoardLayout}/>
    </Route>

    <Redirect from='*' to='/404' />
  </Route>
);
