import React, { Component }     from 'react';
import { Link }                 from 'react-router';

import '../styles/navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='menu'>
        <li>
          <Link to={'/missions'} activeClassName="active">Missions</Link>
        </li>
        <li><Link to={'/users'} activeClassName="active">Users</Link></li>
      </ul>
    );
  }
}
