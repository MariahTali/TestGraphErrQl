import { React, useState } from 'react';
import ErrorResponseBox from './ErrorResponseBox';
import { StyledSuccess, StyledError } from './styles/LoggerResponse.styled';
import SuccessResponseBox from './SuccessResponseBox';

function LoggerResponse(props) {
  const [errorResponseBox, setErrorResponseBox] = useState(false);
  const [successResponse, setSuccessResponse] = useState(false);

  const handleClickSuccess = () => {
    setSuccessResponse((current) => !current);
  };
  const handleClickError = () => {
    setErrorResponseBox((current) => !current);
  };

  //}
  return (
    <div>
      {props.successfail ? (
        <div onClick={handleClickSuccess}>
          <div>
            <StyledSuccess>
              <strong>SUCCESS:</strong> <br />
              {props.query}
            </StyledSuccess>
            <div>
              {successResponse && (
                <SuccessResponseBox response={props.response} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleClickError}>
          <div>
            <StyledError>
              <strong>ERROR:</strong> <br />
              {props.query}
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

export default LoggerResponse;
