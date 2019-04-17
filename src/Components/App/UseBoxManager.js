import React from 'react';
import { generateRandomBackgroundColors, resetBoxManager } from './Utils';

export const useBoxManager = (backgroundColors) => {
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
  }, [backgroundColors, boxManager]);

  return [boxManager, setBoxManager];
};