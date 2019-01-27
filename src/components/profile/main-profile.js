import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Segment, Feed, Header, Grid, Button, Icon, Image, Divider, Progress, Comment } from 'semantic-ui-react';

// -- Components
import ProfileStats from './profile-stats'


const ProfileHeader = styled(Header)`
  background-color: none;
  margin: 8px 0;
`;

const ProfileStatsWrapper = styled.div`
  margin-left: 35%;
  padding: 32px 0;
`;

const ProfileImage = styled(Image)`
  float: left;
  margin-right: 32px;
`;

const ProfileDescription = styled.span`
  font-size: 16px;
`;

const ProfileSegment = styled(Segment)`
  padding: 32px !important;
  margin: 32px 0 !important;

  
  a {
      color: #0075b8;

     &.user {
        margin-left: 0;
      }
  }

  .like {
    font-size: 12px;
  }
`;

const FeedEvent = styled(Feed.Event)`
  margin-bottom: 16px !important;
`;

const FeedExtra = styled(Feed.Extra)`
  font-size: 14px !important;
`;


class MainProfile extends Component {
  state = {
    heartbeats: 89
  }

  increaseHeartbeat = () => {
    this.setState({ heartbeats: this.state.heartbeats + 1 });
  }


  render() {
    const { fullname, illness, age, shortProfile, moneyRaised, thumbnailSrc } = this.props;
    const { heartbeats } = this.state;

    return (<Fragment>
      <Grid>
        <Grid.Column>
          <ProfileStatsWrapper>
            <ProfileStats heartbeats={heartbeats} />
          </ProfileStatsWrapper>
          <Progress percent={20} indicating success progress>
            $10,000 Goal
          </Progress>
        </Grid.Column>
      </Grid>
      <ProfileSegment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column width={10}>
            <ProfileHeader as="h1">Angelo Johnson, 1, fighting Cancer</ProfileHeader>
            <ProfileImage
              label={{ as: 'div', color: 'blue', content: 'I wish to be a Firefighter', icon: 'star', ribbon: true }}
              src='/src/utils/request/mocks/images/kid1.jpg' size='medium' rounded />
            <ProfileDescription>
              When Angelo wants to forget about her condition, she fills her thoughts with castles, kingdoms and fairytales. Her imagination transports her to enchanted lands, where she is the reigning princess. Thanks to Make-A-Wish and Disney, Amelia was able to become the princess she imagines.
              When Angelo wants to forget about her condition, she fills her thoughts with castles, kingdoms and fairytales. Her imagination transports her to enchanted lands, where she is the reigning princess. Thanks to Make-A-Wish and Disney, Amelia was able to become the princess she imagines
              When Angelo wants to forget about her condition, she fills her thoughts with castles, kingdoms and fairytales. Her imagination transports her to enchanted lands, where she is the reigning princess. Thanks to Make-A-Wish and Disney, Amelia was able to become the princess she imagines
            </ProfileDescription>
          </Grid.Column>
          <Grid.Column width={6}>
            <Grid.Row>
              <Button.Group>
                <Button size="huge" onClick={this.increaseHeartbeat} negative>Give  &nbsp; <Icon name="heartbeat" /></Button>
                <Button.Or />
                <Button size="huge" positive>Donate</Button>
              </Button.Group>
            </Grid.Row>
            <Grid.Row>
              <br />
              <Feed>
                <Divider horizontal>Recent Activities</Divider>
                <FeedEvent>
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Samuel D.</a> donated <b>$50</b> yesterday
                  </Feed.Summary>
                  </Feed.Content>
                </FeedEvent>

                <FeedEvent>
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Teresa D.</a> gave a <Icon color="red" name="heartbeat" /> yesterday
                  </Feed.Summary>
                  </Feed.Content>
                </FeedEvent>

                <FeedEvent>
                  <Feed.Content>
                    <Feed.Summary>
                      <a>Kate D.</a> donated <b>$500</b> yesterday
                  </Feed.Summary>
                  </Feed.Content>
                </FeedEvent>
              </Feed>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </ProfileSegment>
      <ProfileSegment>
        <ProfileHeader as="h1">Updates from Angelo</ProfileHeader>
        <br/>
        <div>
          <Feed size='large'>
            <FeedEvent>
              <Feed.Label image='/src/utils/request/mocks/images/kid1.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Angelo</Feed.User> just got approval from Doctor to travel
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='like' />
                    4 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </FeedEvent>

            <FeedEvent>
              <Feed.Label image='/src/utils/request/mocks/images/kid1.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Angelo</Feed.User> posted 6 photos
                  <Feed.Date>4 Hour Ago</Feed.Date>
                </Feed.Summary>

                <FeedExtra images>
                  <a>
                    <img src='/src/utils/request/mocks/images/kid1-1.jpg' />
                  </a>
                  <a>
                    <img src='/src/utils/request/mocks/images/kid1-2.jpg' />
                  </a>
                  <a>
                    <img src='/src/utils/request/mocks/images/kid1-1.jpg' />
                  </a>
                  <a>
                    <img src='/src/utils/request/mocks/images/kid1-2.jpg' />
                  </a>
                  <a>
                    <img src='/src/utils/request/mocks/images/kid1-1.jpg' />
                  </a>
                  <a>
                    <img src='/src/utils/request/mocks/images/kid1-2.jpg' />
                  </a>
                </FeedExtra>
                <Feed.Meta like='1 Like' />
              </Feed.Content>
            </FeedEvent>

            <FeedEvent>
              <Feed.Label image='/src/utils/request/mocks/images/kid1.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Angelo</Feed.User> posted
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <FeedExtra>
                  I will be having my 2nd chemotherapy on Friday. Please pray for good results.
                </FeedExtra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='like' />
                    41 Likes
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </FeedEvent>

            <FeedEvent>
              <Feed.Label image='/src/utils/request/mocks/images/kid1.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>Angelo</Feed.User> posted
                  <Feed.Date>Last Week</Feed.Date>
                </Feed.Summary>
                <FeedExtra>
                  I will be having my 1st chemotherapy on Tuesday. Please pray for good results.
                </FeedExtra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='like' />
                    89 Likes
                  </Feed.Like>
                </Feed.Meta>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Matt</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>How great!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Feed.Content>
            </FeedEvent>
          </Feed>
        </div>
      </ProfileSegment>
    </Fragment>);
  }
}

export default MainProfile;