import React, { Component } from 'react';

import '../styles/navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='menu'>
        <li>Missions</li>
        <li>Users</li>
      </ul>
    );
  }
}
