import { React, useState, useEffect } from 'react';
import LoggerResponse from './LoggerResponse';
import styled from 'styled-components';
// import { StyledBody } from './styles/LoggerBox.styled';
import { mockData } from './mockData';

const responseArray = [];

function LoggerBox() {
  let index = 0;
  const [arrayIndex, setArrayIndex] = useState(0);

  const updateIndex = () => {
    setArrayIndex(arrayIndex + 1);
    index = arrayIndex;
  };

  const addNextItemToArray = (index) => {
    responseArray.push(mockData[index])
  };

const newArray = []

for (let i = 0; i < responseArray.length; i++) {
  newArray.push(<LoggerResponse key = {i} successfail = {responseArray[i].success} query = {responseArray[i].query} response = {responseArray[i].response}/>)  
}

  return(
    <>
      <button
        onClick={() => {
          updateIndex();
          addNextItemToArray(index);
        }}>
        Simulate Query
      </button>
     <div>
       {newArray}
     </div>
    </>
  )
}

export default LoggerBox;
