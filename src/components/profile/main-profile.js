import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Segment, Feed, Header, Grid, Button, Icon, Image, Divider } from 'semantic-ui-react';

// -- Components
import ProfileStats from './profile-stats'


const ProfileStatsWrapper = styled.div`
  margin-left: 35%;
`;

class MainProfile extends Component {
  render() {
    const { profileImgSrc, fullname, age } = this.props;

    return (<Fragment>
      <Grid>
        <Grid.Column>
          <ProfileStatsWrapper>
            <ProfileStats />
          </ProfileStatsWrapper>
        </Grid.Column>
      </Grid>
      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column width={10}>
            <Header as="h4">Angelo Johnson</Header>
            <Image src='/src/utils/request/mocks/images/kid1.jpg' size='medium' rounded />
            <p>
              When Amelia wants to forget about her condition, she fills her thoughts with castles, kingdoms and fairytales. Her imagination transports her to enchanted lands, where she is the reigning princess. Thanks to Make-A-Wish® and Disney, Amelia was able to become the princess she imagines.
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Grid.Row>
              <Button.Group>
                <Button size="huge" negative>Give  &nbsp; <Icon name="heartbeat" /></Button>
                <Button.Or />
                <Button size="huge" positive>Donate</Button>
              </Button.Group>
            </Grid.Row>
            <Grid.Row>
              <br />
              <Feed>
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