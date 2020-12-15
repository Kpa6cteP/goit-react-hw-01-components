import React from 'react';
import Item from './StyledComponents';


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item className="item">
      <span className={isOnline ? "online" : "offline"}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </Item>
  );
}

export default FriendListItem;