import React, { Component } from 'react';
import { selectMission } from '../../actions/missions';
import { store } from '../../store';

import '../../styles/missions/card.scss';

export default class MissionCard extends Component {
  selectMission() {
    return () => {
      store.dispatch(selectMission(this.props.mission));
    };
  }

  render() {
    return (
      <li className='mission card animated fadeIn' onClick={this.selectMission()}>
        <p className='head'>{ this.props.mission.title }</p>
        <p className='description'>{ this.props.mission.description }</p>
        <div className='footer'>
          <ul className='users'>
            { this.props.mission.userIds.length > 0 &&
              this.props.mission.userIds.map(
                (id) => (
                  <li key={id} style={{ backgroundImage: 'url(http://lorempixel.com/100/100/people)' }}
                    className='user'
                  ></li>
                )
              )
            }
          </ul>
        </div>
      </li>
    );
  }
}
