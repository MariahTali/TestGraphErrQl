import { React, useState} from 'react';
import Log from './Log';
import { mockData } from './mockData';

const mockLogs = [];

function LoggerBox() {
  let index = 0;
  const [arrayIndex, setArrayIndex] = useState(0);

  const updateIndex = () => {
    setArrayIndex(arrayIndex + 1);
    index = arrayIndex;
  };

  const addNextItemToArray = (index) => {
    mockLogs.push(mockData[index])
  };

const logs = []

for (let i = 0; i < mockLogs.length; i++) {
  logs.push(<Log key = {i} success = {mockLogs[i].success} query = {mockLogs[i].query} response = {mockLogs[i].response}/>)  
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
       {logs}
     </div>
    </>
  )
}

export default LoggerBox;
