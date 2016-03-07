import React, { Component } from 'react';

import '../../styles/missions/card.scss';

export default class MissionCard extends Component {
  render() {
    return (
      <li className='mission card animated fadeIn'>
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