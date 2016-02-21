import React, { Component }    from 'react';
import { connect }             from 'react-redux';

import { fetchMissionsIfNeeded } from '../../actions/missions';

class MissionsBoardLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchMissionsIfNeeded());
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.missions.items.length > 0 &&
            this.props.missions.items.map((m) => m.title)
          }
        </ul>
      </div>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(MissionsBoardLayout);
