import React, { Component }    from 'react';
import { connect }             from 'react-redux';

import { fetchMissionsIfNeeded } from '../../actions/missions';
import MissionCard from '../../components/missions/card';

import '../../styles/missions/board.scss';

class MissionsBoardLayout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMissionsIfNeeded());
  }

  render() {
    return (
      <ul className='mission board'>
        {
          this.props.missions.items.length > 0 &&
          this.props.missions.items.map((m) => <MissionCard key={m._id} mission={m} />)
        }
      </ul>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(MissionsBoardLayout);
