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
    // console.log(index)
    // console.log(mockData[index])
    responseArray.push(mockData[index])
    console.log(responseArray);
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

// function LoggerBox() {
//   //onclick of "simulate query" button

//   const [queryResponse, setQueryResponse] = useState([])

//   const addQueryResponse = (newQuery) => {
//       setQueryResponse(prevQueries => {
//           return [...prevQueries, newQuery]
//       })
//   }

// }

// const addQuery = (mockData) => {

// }

//   return (

//     <div>
//         <button onClick={addQuery}>Simulate Query</button>
//         {queryResponse.map((query, index) => {
//             return (
//                 <LoggerResponse key = {index}  />
//             )
//         })}
//     </div>

//   );

  //   const responseArray = []
  //   const [responseBox, setResponseBox] = useState(responseArray)

  // const addNextItemToArray = (mockData) {

  // }

  // return (
  //     <div>
  //     <button onClick={() => setArrayIndex(responseArray.push())}>
  //       Simulate Query
  //       </button>
  //     <LoggerResponse data = {mockData[arrayIndex]} />
  //   </div>

  // )
// }

export default LoggerBox;
