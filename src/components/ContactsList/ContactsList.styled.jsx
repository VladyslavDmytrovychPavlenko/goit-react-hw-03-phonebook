import styled from 'styled-components';

export const List = styled.ul`
display="flex"
flexWrap="wrap"
justifyContent="center"
alignContent="flex-start"
`;

export const ContactsEl = styled.li`
  padding: 0px 15px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  height: 60px;
  font-weight: 500;
  font-size: 18px;
`;

export const Btn = styled.button`
  background-color: grey;
  border: none;
  border-radius: 6px;
  box-shadow: 6px -2px 26px 2px rgba(166, 156, 48, 0.55);
  color: white;
  font-weight: 700;
  font-size: 15px;
  padding: 10px;
  margin-left: 15px;
  cursor: pointer;
  &:active {
    background-color: green;
  }
`;
