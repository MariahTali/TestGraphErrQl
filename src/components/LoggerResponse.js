import {React, useState, useEffect} from 'react'
import { StyledSuccess, StyledError } from './styles/LoggerResponse.styled'

function LoggerResponse(props) {
  
  // const handleClickSuccess = e => {
  //   console.log(" Success clicked!")
  // }
  // const handleClickError = e => {
  //   console.log(" Error clicked!")
  // }
  return (
    <div>
    {props.successfail ?  (
      <>
        <StyledSuccess> 
          SUCCESS: {props.sucessfail}
          {props.query}
          {props.response}
        </StyledSuccess>
      </>
    )  :  
     (
      <>
        <StyledError> 
          ERROR: {props.sucessfail}
          {props.query}
          {props.response}
         </StyledError>
      </>
    )  
    }




    </div>
  )
}

export default LoggerResponse
