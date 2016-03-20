import React, { Component }    from 'react';
import { connect }             from 'react-redux';

import { fetchMissionsIfNeeded } from '../../actions/missions';
import MissionCard from '../../components/missions/card';
import MissionModal from '../../components/missions/modal';

import '../../styles/missions/board.scss';

class MissionsBoardLayout extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMissionsIfNeeded());
  }

  renderMissionModal() {
    if (!this.props.selected) {
      return;
    }

    return (
      <MissionModal />
    );
  }

  render() {
    return (
      <ul className='mission board'>
        {
          this.props.missions.length > 0 &&
          this.props.missions.map((m) => <MissionCard key={m._id} mission={m} />)
        }
        {this.renderMissionModal()}
      </ul>
    );
  }
}

function mapState(state) {
  return {
    missions: state.missions.items,
    selected: state.missions.selected,
  };
}

export default connect(mapState)(MissionsBoardLayout);
