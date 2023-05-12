import styled from 'styled-components';

export const Input = styled.input`
  background-color: white;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 300px;
  padding: 10px;
  outline: none;
  border: none;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Btn = styled.button`
  background-color: yellowgreen;
  border: none;
  border-radius: 6px;
  box-shadow: 6px -2px 26px 2px rgba(166, 156, 48, 0.55);
  color: white;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  width: 320px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  &:active {
    background-color: green;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;
