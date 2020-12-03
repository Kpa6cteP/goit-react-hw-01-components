import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
padding: 15px 15px;

.avatar {
  display: block;
  max-width: 60%;
  margin: auto;
}

.name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: var(--main-color);
}

.tag {
  text-align: center;
  color: #A1ABB6;
  font-size: 15px;
}

.location {
  text-align: center;
  color: #A1ABB6;
  padding: 5px 0;
}
`;

const DescriptionProfile = ({ avatar, name, tag, location }) => {
  return (
    <Description>
      <img
        src={avatar}
        alt={name}
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </Description>

  );
}

export default DescriptionProfile;