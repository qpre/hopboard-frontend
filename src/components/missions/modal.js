import React, { Component } from 'react';
import { connect }          from 'react-redux';

import '../../styles/missions/modal.scss';

export class MissionModal extends Component {
  render() {
    return (
      <li className='mission modal animated fadeIn'>
        <div className='solid'>
          {this.props.mission.title}
        </div>
      </li>
    );
  }
}

function mapState(state) {
  return {
    mission: state.missions.selected,
  };
}

export default connect(mapState)(MissionModal);
