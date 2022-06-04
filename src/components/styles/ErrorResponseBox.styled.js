import styled, { keyframes } from 'styled-components';
import { slideInDown, fadeInDown, zoomInDown } from 'react-animations';

const zoomAnimation = keyframes`${zoomInDown}`;

export const ErrorResponseDropdown = styled.body`
  background-color: #aa4465;
  border: 7px solid #078aa8;
  border-top: 0px;
  border-radius: 0px 0px 20px 20px;
  padding: 20px 10px;
  color: black;
  margin-top: 0px;
  margin-right: 0px;
  margin-left: 0px;
  animation: 0.3s ${zoomAnimation};
`;
