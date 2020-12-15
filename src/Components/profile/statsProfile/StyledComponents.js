import styled from 'styled-components';

const Stats = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background: #F3F6F9;

li {
  list-style-type: none;
  width: 33%;
  display: flex;
  padding: 5px;
  flex-direction: column;
  margin: 0 auto;
}

li:nth-child(2) {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}

.label {
  color: #A1ABB6;
}

.quantity {
  color: var(--main-color);
  font-size: 18px;
  font-weight: 700;
}
`;

export default Stats;