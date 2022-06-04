import { React, useState } from 'react';
import LoggerBox from './LoggerBox';
import QueryBox from './QueryBox';
import logo from '../images/GraphErrlogo.svg';
import { BsToggle2Off, BsToggle2On, BsPlayCircle } from 'react-icons/bs';
import { Logo, StyledHeader } from './styles/Header.styled';
import { StyledBody } from './styles/LoggerBox.styled';

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
        {liveMode ? (
          <>
            <BsToggle2On
              size='4em'
              color='white'
              onClick={() => handleToggleClick()}
            />
          </>
        ) : (
          <>
            <BsPlayCircle size='4em' color='white' />
            <BsToggle2Off
              size='4em'
              color='white'
              onClick={() => handleToggleClick()}
            />
          </>
        )}
      </StyledHeader>
      <StyledBody>{liveMode ? <LoggerBox /> : <QueryBox />}</StyledBody>
    </div>
  );
}

export default Header;
