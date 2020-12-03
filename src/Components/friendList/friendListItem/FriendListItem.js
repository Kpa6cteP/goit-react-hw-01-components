import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  padding: 25px 10px;
  border: 1px solid #ddd;
  margin: 10px 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

.name {
  color: #000;
}

.online, .offline {
  width: 15px;
  height: 15px;
  border-radius: 100%;

}
.offline {
  background: red;
}

.online {
  background: green;
}
`;


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <Item className="item">
        <span className={isOnline ? "online" : "offline"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </Item>
    </>
  );
}

export default FriendListItem;