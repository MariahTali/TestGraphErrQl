import styled, { keyframes } from 'styled-components';
import { slideInDown, fadeInDown, zoomInDown } from 'react-animations';

const slideAnimation = keyframes`${slideInDown}`;
const fadeAnimation = keyframes`${fadeInDown}`;
const zoomAnimation = keyframes`${zoomInDown}`;

export const ErrorResponseDropdown = styled.body`
  background-color: #aa4465;
  border: 7px solid #078aa8;
  border-top: 0px;
  border-radius: 0px 0px 15px 15px;
  padding: 20px 10px;
  color: black;
  margin-top: 0px;
  // animation: 0.5s ${zoomAnimation};
`;
