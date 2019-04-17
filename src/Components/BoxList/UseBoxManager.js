import React from 'react';

const generateRandomBackgroundColors = backgroundColors => {
  const copiedBackgroundColors = backgroundColors.slice();
  const generatedRandomBackgroundColors = [];
  while (copiedBackgroundColors.length) {
    const randomIndex = Math.floor(
      Math.random() * copiedBackgroundColors.length
    );
    const chosenBackgroundColor = copiedBackgroundColors[randomIndex];
    generatedRandomBackgroundColors.push(chosenBackgroundColor);
    copiedBackgroundColors.splice(randomIndex, 1);
  }
  return generatedRandomBackgroundColors;
};

export const useBoxManager = (backgroundColors) => {
  const [boxManager, setBoxManager] = React.useState(null);

  React.useEffect(() => {
    if (backgroundColors.length && !boxManager) {
      const generatedBackgroundColors = [
        ...generateRandomBackgroundColors(backgroundColors),
        ...generateRandomBackgroundColors(backgroundColors),
      ];

      setBoxManager(
        generatedBackgroundColors.reduce(
          (initBoxManager, backgroundColor, index) => {
            initBoxManager[index] = {
              index,
              backgroundColor,
              showBackground: false,
              matched: false
            };
            return initBoxManager;
          },
          {}
        )
      );
    }
  }, [backgroundColors, boxManager]);

  return [boxManager, setBoxManager];
};