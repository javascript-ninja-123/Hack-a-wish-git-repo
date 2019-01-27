import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Segment, Divider, Container, Grid, Button, Icon, Image } from 'semantic-ui-react';

import Header from 'containers/header/header';

// -- Components
import MainProfile from 'components/profile/main-profile';

const ProfileWrapper = styled.div`
  margin-top: 16px;
`;

class Profile extends Component {
  componentDidMount() {
    console.log('Profile', this.props)
  }

  render() {
    return (<Fragment>
      <Container>
        <ProfileWrapper>
          <MainProfile/>
        </ProfileWrapper>
      </Container>
    </Fragment>);
  }
}

export default Profile;