import React from 'react';
import { NavBar, RightSectionItem, RightSectionContainer, Display } from './Styles';
import { GlobalStyle } from '../../GlobalStyles';
import { BoxList } from '../BoxList/BoxList';
import { useBoxManager } from './UseBoxManager';
import { useBackgroundColors } from './UseBackgroundColors';
import { useResetGame } from './UseResetGame';
import { numBoxesOptions, formatLevelName, displayNumGuesses, displayLevel } from './Utils';

export const BoxListContainer = () => {
  const [gameOver, setGameOver] = React.useState(false);
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [numBoxes, setNumBoxes] = React.useState(numBoxesOptions.EASY);
  const [backgroundColors, setBackgroundColors] = useBackgroundColors(numBoxes);
  const [boxManager, setBoxManager] = useBoxManager(backgroundColors, setGameOver);
  const setResetGame = useResetGame(numBoxes, backgroundColors, setBackgroundColors, setBoxManager, setNumGuesses, setGameOver);

  const updateResetGameState = () => {
    setResetGame(true);
  };

  const renderGameLevels = () => {
    return Object
      .entries(numBoxesOptions)
      .map(([levelName, levelValue]) => {
        return (
          <RightSectionItem
            key={ levelName }
            data-level-value={ levelValue }
            onClick={ updateGameLevel }
          >
            { formatLevelName(levelName) }
          </RightSectionItem>
        );
      }
    );
  };

  const updateGameLevel = (event) => {
    setNumBoxes(Number(event.target.getAttribute(`data-level-value`)));
  };

  return (
    <>
      <GlobalStyle />
      <NavBar>
        <p>
          Memory Game
        </p>
        <RightSectionContainer
          numColumns={ Object.values(numBoxesOptions).length + 1 }
        >
          { renderGameLevels() }
          <RightSectionItem
            onClick={ updateResetGameState }
          >
            New Game
          </RightSectionItem>
        </RightSectionContainer>
      </NavBar>
        <Display>
          <p>
            { displayLevel(numBoxes) }
          </p>
          <p>
            { displayNumGuesses(gameOver, numGuesses) }            
          </p>
        </Display>
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