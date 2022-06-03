import {React, useState} from 'react'
import ErrorResponseBox from './ErrorResponseBox'
import { StyledSuccess, StyledError } from './styles/LoggerResponse.styled'

function LoggerResponse(props) {
  
const [errorResponseBox, setErrorResponseBox] = useState(false)

  const handleClickSuccess = () => {
    console.log(" Success clicked!")
  }
  const handleClickError = () => {
    setErrorResponseBox(current => !current);
    }
     
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
      ) : (
        <div onClick={handleClickError}>
          <div>
            <StyledError>
              ERROR: {props.successfail}
              &nbsp;
              {props.query}
              &nbsp;
              {props.response}
            </StyledError>
          </div>

          <div>
            {errorResponseBox && <ErrorResponseBox response={props.response} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoggerResponse

