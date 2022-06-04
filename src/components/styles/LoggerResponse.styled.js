import styled from 'styled-components';

export const StyledErrorNoResponse = styled.pre`
  background-color: #ff1616;
  border: 7px solid #078aa8;
  color: #ffffff;
  border-radius: 20px;
  padding: 20px 10px;
  font-size: 1.25em;
`;

export const StyledErrorWithResponse = styled.pre`
  background-color: #ff1616;
  border: 7px solid #078aa8;
  color: #ffffff;
  border-radius: 20px 20px 0px 0px;
  padding: 20px 10px;
  margin-bottom: 0px;
`;

export const StyledSuccessNoResponse = styled.pre`
  background-color: green;
  border: 7px solid #078aa8;
  color: #ffffff;
  border-radius: 20px;
  padding: 20px 10px;
  font-size: 1.25em;
`;

export const StyledSuccessWithResponse = styled.pre`
  background-color: green;
  border: 7px solid #078aa8;
  color: #ffffff;
  border-radius: 20px 20px 0px 0px;
  padding: 20px 10px;
  margin-bottom: 0px;
`;
