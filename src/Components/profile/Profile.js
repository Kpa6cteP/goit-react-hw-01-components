import React from 'react';
import DescriptionProfile from './descriptionProfile/DescriptionProfile';
import StatsProfile from './statsProfile/StatsProfile';
import styled from "styled-components";

const Container = styled.div`
  padding-top: 15px;
  max-width: 280px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 4px rgba(0,0,0, .25);
  margin: 25px auto;
  background: #fff;
  cursor: pointer;
  transition: box-shadow .2s linear;
`;


const Profile = ({ user }) => {
  return (
    <Container>
      <DescriptionProfile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} />
      <StatsProfile stats={user.stats} />
    </Container>
  );
}

export default Profile;