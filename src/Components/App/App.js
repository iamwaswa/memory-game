import React from 'react';
import { NavBar, BoxListContainer, NewGame } from './Styles';
import { GlobalStyle } from '../../GlobalStyles';
import { BoxList } from '../BoxList/BoxList';

export const App = () => {
  const [numGuesses, setNumGuesses] = React.useState(0);

  return (
    <>
      <GlobalStyle />
      <NavBar>
        <p>
          { numGuesses === 1 ? 
            `You made ${numGuesses} guess!` 
            : 
              numGuesses > 1 ? 
                `You made ${numGuesses} guesses!` 
                : 
                `` 
          }
        </p>
        <NewGame>
          New Game
        </NewGame>
      </NavBar>
      <BoxListContainer>
        <BoxList 
          numBoxes={16} 
          setNumGuesses={setNumGuesses}
        /> 
      </BoxListContainer>
    </>
  );
};