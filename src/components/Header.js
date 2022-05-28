import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import LoggerBox from './LoggerBox';
import QueryBox from './QueryBox';
import logo from '../images/GraphErrlogo.svg';
import { BsToggle2Off, BsToggle2On, BsPlayCircle } from 'react-icons/bs';
import { Logo, StyledHeader, StyledBody} from './styles/Header.styled';

function Header() {
  const [liveMode, setLiveMode] = useState(false);

  const handleToggleClick = () => {
    setLiveMode((previousToggle) => {
      return !previousToggle;
    });
  };

  return (
    <div>
    <StyledHeader>
      <Logo src={logo} alt='Logo' />
      {/* //if livemode is off, render play circle and querybox */}
        {liveMode ? (
          <>
            <BsToggle2On size='4em' color = "white" onClick={() => handleToggleClick()} />
            {/* <LoggerBox /> */}
          </>
        ) : (
          <>
            <BsPlayCircle size='4em'  color = "white"/>
            <BsToggle2Off size='4em'  color = "white" onClick={() => handleToggleClick()} />
            {/* <QueryBox /> */}
          </>
        )}
      {/* // if livemode is on, render loggerbox and toggleonIcon */}
    </StyledHeader>
    <StyledBody>
       {liveMode ? (
            <LoggerBox />
        ) : (
            <QueryBox />
        )}
     </StyledBody>
    </div>
  );
}

export default Header;
