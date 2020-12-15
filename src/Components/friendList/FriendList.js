import React from 'react';
import FriendListItem from './friendListItem/FriendListItem';
import FriendUl from './StyledComponents';


const FriendList = ({ friends }) => {
  return (
    <FriendUl className="friend-list">
      {friends.map((friend) =>
        <FriendListItem {...friend} key={friend.id} />
      )}
    </FriendUl>
  );
}

export default FriendList;