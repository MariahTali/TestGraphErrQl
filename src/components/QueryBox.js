import React from 'react';
import LMInputBox from './LMInputBox';
import LMResponseBox from './LMResponseBox';
import { StyledLMInputBox } from './styles/LMInputBox.styled.js';
import { StyledLMResponseBox } from './styles/LMOutputBox.styled.js';


function QueryBox() {
  return (
    <div>
      <StyledLMInputBox>
        <LMInputBox />
      </StyledLMInputBox>
      &nbsp; &nbsp; &nbsp;
      <StyledLMResponseBox>
        <LMResponseBox />
      </StyledLMResponseBox>
    </div>
  );
}

export default QueryBox;
