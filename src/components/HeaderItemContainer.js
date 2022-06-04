import { StyledHeaderItemContainer } from './styles/HeaderItemContainer.styled';
import { BsToggle2Off, BsToggle2On, BsPlayCircle } from 'react-icons/bs';

function HeaderItemContainer({ liveMode, handleToggleClick }) {
  return (
    <>
      <>
        <StyledHeaderItemContainer>
          <BsPlayCircle size='4em' color={liveMode ? 'white' : '#003845'} />
          {/* <p style={{ color: 'white' }}>test</p> */}
        </StyledHeaderItemContainer>
        <StyledHeaderItemContainer>
          <p></p>
          {liveMode ? (
            <BsToggle2On
              size='4em'
              color='white'
              onClick={() => handleToggleClick()}
            />
          ) : (
            <BsToggle2Off
              size='4em'
              color='white'
              onClick={() => handleToggleClick()}
            />
          )}
          <p style={{ color: 'white' }}>Live Mode</p>
        </StyledHeaderItemContainer>

        {/* <LoggerBox /> */}
      </>
    </>
  );
}

export default HeaderItemContainer;
