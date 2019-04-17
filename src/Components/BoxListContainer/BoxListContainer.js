import React from 'react';
import { NavBar, NewGame } from './Styles';
import { GlobalStyle } from '../../GlobalStyles';
import { BoxList } from '../BoxList/BoxList';
import { useBoxManager } from './UseBoxManager';
import { useBackgroundColors } from './UseBackgroundColors';
import { useResetGame } from "./UseResetGame";

export const BoxListContainer = ({ numBoxes }) => {
  const [backgroundColors, setBackgroundColors] = useBackgroundColors(numBoxes);
  const [boxManager, setBoxManager] = useBoxManager(backgroundColors);
  const [numGuesses, setNumGuesses] = React.useState(0);
  const setResetGame = useResetGame(numBoxes, backgroundColors, setBackgroundColors, setBoxManager, setNumGuesses);

  const updateResetGameState = () => {
    setResetGame(true);
  };

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
        <NewGame
          onClick={ updateResetGameState }
        >
          New Game
        </NewGame>
      </NavBar>
      <BoxList 
        numBoxes={ numBoxes }
        backgroundColors={ backgroundColors }
        setNumGuesses={ setNumGuesses }
        boxManager={ boxManager }
        setBoxManager={ setBoxManager }
      /> 
    </>
  );
};