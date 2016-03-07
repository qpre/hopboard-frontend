import React, { Component }     from 'react';
import { store }                from '../store';
import { routeActions }         from 'react-router-redux';

import '../styles/navbar.scss';

function goTo(path) {
  return () => {
    store.dispatch(routeActions.push(path));
  };
}

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='menu'>
        <li onClick={goTo('/missions')}>Missions</li>
        <li>Users</li>
      </ul>
    );
  }
}
