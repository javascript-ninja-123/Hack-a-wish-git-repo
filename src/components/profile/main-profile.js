import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Segment, Feed, Header, Grid, Button, Icon, Image, Divider } from 'semantic-ui-react';

// -- Components
import ProfileStats from './profile-stats'


const ProfileStatsWrapper = styled.div`
  margin-left: 35%;
`;

class MainProfile extends Component {
  state = {
    heartbeats: 89
  }

  increaseHeartbeat = () => {
    this.setState({ heartbeats: this.state.heartbeats + 1 });
  }


  render() {
    const { profileImgSrc, fullname, age, closeProfile } = this.props;
    const { heartbeats } = this.state;

    return (<Fragment>
      <Segment style={{ minWidth: '625px', width: '75%' }}>
        <Grid columns={2}>
          <Header style={{ position: 'relative', margin: '10px', width: '100%', height: '80px', borderRadius: '2px', color: 'white' }} as="h3">
            <ProfileStatsWrapper style={{ marginTop: '10px' }}>
              <ProfileStats heartbeats={heartbeats} />
            </ProfileStatsWrapper>
            <Icon onClick={() => closeProfile()} style={{ position: 'relative', cursor: 'pointer', marginLeft: 'auto', marginTop: '13px', height: '20px', width: '20px' }} color="white" name="close" />
          </Header>
          <Grid.Column style={{ marginLeft: '40px' }}>
            <Image style={{ height: '150px', width: 'auto' }} src='/src/utils/request/mocks/images/kid2.jpg' size='medium' rounded />
            <p>
              When Amelia wants to forget about her condition, she fills her thoughts with castles, kingdoms and fairytales. Her imagination transports her to enchanted lands, where she is the reigning princess. Thanks to Make-A-Wish and Disney, Amelia was able to become the princess she imagines.
            </p>
          </Grid.Column>
          <Grid.Column style={{ marginTop: '20px', marginLeft: '30px' }} width={6}>
            <Grid.Row>
              <Button.Group>
                <Button style={{ borderRadius: '2px' }} size="huge" onClick={this.increaseHeartbeat} negative>Give  &nbsp; <Icon name="heartbeat" /></Button>
                <Button.Or />
                <Button style={{ borderRadius: '2px' }} size="huge" positive>Donate</Button>
              </Button.Group>
            </Grid.Row>
            <Grid.Row>
              <br />
              <Feed style={{ marginTop: '20px' }}>
                <Divider horizontal>Recent Activities</Divider>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Samuel D.</a> donated <b>$50</b> yesterday
                  </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Teresa D.</a> gave a <Icon color="red" name="heartbeat" /> yesterday
                  </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Kate D.</a> donated <a>$500</a> yesterday
                  </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    </Fragment>);
  }
}

export default MainProfile;