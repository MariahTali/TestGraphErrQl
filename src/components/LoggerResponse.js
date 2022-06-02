import {React, useState, useEffect} from 'react'
import ErrorResponseBox from './ErrorResponseBox'
import { StyledSuccess, StyledError } from './styles/LoggerResponse.styled'
import {ErrorResponseDropdown} from './styles/ErrorResponseBox.styled'

function LoggerResponse(props) {
  
const [errorResponseBox, setErrorResponseBox] = useState(false)

  const handleClickSuccess = () => {
    console.log(" Success clicked!")
  }
  // const handleClickError = () => {
  //   console.log(" Error clicked!")
  //   setErrorResponseBox = useState(true);
  //   }
     
  //}
  return (
    <div>
    {props.successfail ? (
      <div onClick={handleClickSuccess}>
        <StyledSuccess> 
          SUCCESS: {props.successfail}
           &nbsp; 
          {props.query}
           &nbsp; 
          {props.response}
        </StyledSuccess>
      </div>
    )  :  
     (
      <div onClick= {() => setErrorResponseBox(true)}>

        <div >
        <StyledError> 
          ERROR: {props.successfail}
           &nbsp; 
          {props.query}
           &nbsp; 
          {props.response}
         </StyledError>
         </div>
        
         <div>
           {errorResponseBox && <ErrorResponseBox response = {props.response}/>}
        </div>
      
      </div>
    ) 
    } 
    </div>
  )
}

export default LoggerResponse
