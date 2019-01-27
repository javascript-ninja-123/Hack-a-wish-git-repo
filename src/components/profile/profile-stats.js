import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react';


class ProfileStats extends Component {


  render() {
    const { heartbeats } = this.props;

    return (<Statistic.Group style={{ color: 'white' }}>
      <Statistic style={{ color: 'white' }}>
        <Statistic.Value style={{ color: 'white' }}>12</Statistic.Value>
        <Statistic.Label>Donors</Statistic.Label>
      </Statistic>

      <Statistic style={{ color: 'white' }}>
        <Statistic.Value style={{ color: 'white' }}>{heartbeats} <Icon style={{ marginLeft: '5px' }} color="red" name="heartbeat" /></Statistic.Value>
        <Statistic.Label>Heartbeats</Statistic.Label>
      </Statistic>

      <Statistic style={{ color: 'white' }}>
        <Statistic.Value style={{ color: 'white' }}>$2,012</Statistic.Value>
        <Statistic.Label>Raised</Statistic.Label>
      </Statistic>
    </Statistic.Group>);
  }
}

export default ProfileStats;