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

export default Description;