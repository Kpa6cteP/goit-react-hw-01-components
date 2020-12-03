import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import styled from 'styled-components';

const FriendUl = styled.ul`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
`;


const FriendList = ({ friends }) => {
  return (
    <>
      <FriendUl className="friend-list">
        {friends.map((friend) =>
          <FriendListItem {...friend} key={friend.id} />
        )}
      </FriendUl>
    </>
  );
}

export default FriendList;