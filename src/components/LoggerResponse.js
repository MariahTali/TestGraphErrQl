import {React, useState, useEffect} from 'react'
import { StyledSuccess, StyledError } from './styles/LoggerResponse.styled'

function LoggerResponse() {
  
  const handleClickSuccess = e => {
    console.log(" Success clicked!")
  }
  const handleClickError = e => {
    console.log(" Error clicked!")
  }
  return (
    <>
    <div onClick={handleClickSuccess}>
    <StyledSuccess>
      Success
     </StyledSuccess>
    </div>
    <div onClick={handleClickError}>
   <StyledError>
      Error
     </StyledError>
   </div>
   </>
  )
}

export default LoggerResponse
