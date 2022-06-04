import { React, useState } from 'react';
import LoggerResponse from './LoggerResponse';
import { mockData } from './mockData';

function LoggerBox() {
  const [arrayIndex, setArrayIndex] = useState(0);
  const [responseArray, setResponseArray] = useState([]);

  const updateIndex = () => {
    if (arrayIndex < 5) {
      setArrayIndex((num) => num + 1);

      setResponseArray((resArray) => [
        ...resArray,
        <LoggerResponse
          key={arrayIndex}
          successfail={mockData[arrayIndex].success}
          query={mockData[arrayIndex].query}
          response={mockData[arrayIndex].response}
        />,
      ]);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          updateIndex();
        }}
      >
        Simulate Query
      </button>
      <div>{responseArray}</div>
    </>
  );
}
export default LoggerBox;
