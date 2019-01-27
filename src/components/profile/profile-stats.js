import React, { Component } from 'react';
import { Statistic, Icon } from 'semantic-ui-react';


class ProfileStats extends Component {
  render() {
    return (<Statistic.Group>
      <Statistic>
        <Statistic.Value>12</Statistic.Value>
        <Statistic.Label>Donors</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>432 <Icon color="red" name="heartbeat" /></Statistic.Value>
        <Statistic.Label>Heartbeats</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>$2,012</Statistic.Value>
        <Statistic.Label>Needed</Statistic.Label>
      </Statistic>
    </Statistic.Group>);
	}
}

export default ProfileStats;