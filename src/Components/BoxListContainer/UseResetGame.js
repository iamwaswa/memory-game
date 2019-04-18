import React from 'react';
import { getRandomRGBValues, generateRandomBackgroundColors, resetBoxManager } from './Utils';

export const useResetGame = 
(numBoxes, backgroundColors, setBackgroundColors, setBoxManager, setNumGuesses, setGameOver) => {
  const [resetGame, setResetGame] = React.useState(false);

  React.useEffect(() => {
    setResetGame(true);
  }, [numBoxes]);

  React.useEffect(() => {
    if (resetGame) {
      setBackgroundColors(getRandomRGBValues(numBoxes / 2));
    }
  }, [resetGame]);

  React.useEffect(() => {
    if (resetGame && backgroundColors.length) {
      const generatedRandomColors = [
        ...generateRandomBackgroundColors(backgroundColors),
        ...generateRandomBackgroundColors(backgroundColors),
      ];
      setBoxManager(
        resetBoxManager(generatedRandomColors)
      );
      setNumGuesses(0);
      setGameOver(false);
      setResetGame(false);
    }
  }, [backgroundColors, resetGame]);

  return setResetGame;
};