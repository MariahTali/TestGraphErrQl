import React from 'react';
import LMInputBox from './LMInputBox';
import LMResponseBox from './LMResponseBox';
import { StyledLMInputBox } from './styles/LMInputBox.styled.js';
import { StyledLMResponseBox } from './styles/LMOutputBox.styled.js';

// import type { ValidationContext, SDLValidationContext } from 'graphql';
// import { GraphQLSchema } from 'graphql';

// import CodeMirror from 'codemirror';
// import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/lint/lint';
// import 'codemirror-graphql/hint';
// import 'codemirror-graphql/lint';
// import 'codemirror-graphql/mode';

CodeMirror.fromTextArea(myTextarea, {
  mode: 'graphql',
  lint: {
    schema: myGraphQLSchema,
    // validationRules: [ExampleRule],
  },
  hintOptions: {
    schema: myGraphQLSchema,
  },
});

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
