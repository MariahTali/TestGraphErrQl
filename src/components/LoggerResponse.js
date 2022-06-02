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
      <StyledSuccess> 
       {props.sucessfail}
       {props.query}
       {props.response}
      </StyledSuccess>
    </div>
  )
}

export default LoggerResponse
