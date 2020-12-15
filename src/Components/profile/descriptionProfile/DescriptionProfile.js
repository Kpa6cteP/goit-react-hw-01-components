import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Description from './StyledComponents';



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

DescriptionProfile.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  name: "Jacques Gluke",
}

DescriptionProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
}

export default DescriptionProfile;