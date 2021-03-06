import '../styles/reset.css';
import '../styles/animate.css';
import '../styles/pe-icon-7-stroke.css';
import '../styles/main.scss';

import React, { Component }    from 'react';
import { connect }             from 'react-redux';

import Background from '../components/background';
import Navbar from '../components/navbar';

class Application extends Component {
  render() {
    return (
      <div className='application'>
        <Background />
        <Navbar />
        <div className='content'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Application);
