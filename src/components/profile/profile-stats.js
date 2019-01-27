import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react';


class ProfileStats extends Component {
  

  render() {
    const { heartbeats } = this.props;

    return (<Statistic.Group>
      <Statistic>
        <Statistic.Value>12</Statistic.Value>
        <Statistic.Label>Donors</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>{heartbeats} <Icon color="red" name="heartbeat" /></Statistic.Value>
        <Statistic.Label>Heartbeats</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>$2,012</Statistic.Value>
        <Statistic.Label>Raised</Statistic.Label>
      </Statistic>
    </Statistic.Group>);
	}
}

export default ProfileStats;