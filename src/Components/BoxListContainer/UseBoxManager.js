import React from 'react';
import { generateRandomBackgroundColors, resetBoxManager } from './Utils';

export const useBoxManager = (backgroundColors, setGameOver) => {
  const [boxManager, setBoxManager] = React.useState(null);

  React.useEffect(() => {
    if (backgroundColors.length && !boxManager) {
      const generatedBackgroundColors = [
        ...generateRandomBackgroundColors(backgroundColors),
        ...generateRandomBackgroundColors(backgroundColors),
      ];

      setBoxManager(
        resetBoxManager(generatedBackgroundColors)
      );
    }
  }, [backgroundColors]);

  React.useEffect(() => {
    if (boxManager) {
      const isGameOver = Object
        .values(boxManager)
        .filter(({ matched }) => {
          return !matched;
        }
      ).length === 0;
      
      if (isGameOver) {
        setGameOver(true);
      }
    }
  }, [boxManager]);

  return [boxManager, setBoxManager];
};