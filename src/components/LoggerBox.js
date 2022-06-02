import {React, useState, useEffect} from 'react';
import LoggerResponse from './LoggerResponse';
import styled from 'styled-components';
// import { StyledBody } from './styles/LoggerBox.styled';

function LoggerBox() {
    //onclick of "simulate query" button
    const [responseBox, setResponseBox] = useState([])

    const [arrayIndex, setArrayIndex] = useState(0)
    
    

  return (
      <div>
      <button onClick={() => setArrayIndex(arrayIndex + 1)}>
        Simulate Query
        </button>
      <LoggerResponse />
    </div>
    
  )
}

export default LoggerBox;
