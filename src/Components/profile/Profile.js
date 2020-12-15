import React from 'react';
import DescriptionProfile from './descriptionProfile/DescriptionProfile';
import StatsProfile from './statsProfile/StatsProfile';
import Container from './StyledComponents';

const Profile = ({ user }) => {
  return (
    <Container>
      <DescriptionProfile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} />
      <StatsProfile stats={user.stats} />
    </Container>
  );
}



export default Profile;