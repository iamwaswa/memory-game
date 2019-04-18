export const generateRandomBackgroundColors = (backgroundColors) => {
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

export const resetBoxManager = (generatedBackgroundColors) => {
  return generatedBackgroundColors.reduce(
    (initBoxManager, backgroundColor, index) => {
      initBoxManager[index] = {
        index,
        backgroundColor,
        showBackground: false,
        matched: false
      };
      return initBoxManager;
    }, {}
  );
};

export const getRandomRGBValues = (numValues) => {
  return Array(numValues)
    .fill(null)
    .map((backgroundColor) => {
      const rValue = Math.floor(Math.random() * 256);
      const gValue = Math.floor(Math.random() * 256);
      const bValue = Math.floor(Math.random() * 256);
      return `rgb(${rValue},${gValue},${bValue})`;
    }
  );
};

export const numBoxesOptions = {
  EASY: 12,
  MEDIUM: 16,
  HARD: 20,
  EXTRA_HARD: 24,
};

export const formatLevelName = (levelName) => {
  return levelName.replace(`_`, ` `);
}

export const displayLevel = (numBoxes) => {
  const [levelName] = Object
    .entries(numBoxesOptions)
    .filter(([, optionValue]) => {
      return optionValue === numBoxes;
    }
  )[0];

  return `Level: ${formatLevelName(levelName)}`;
};

export const displayNumGuesses = (gameOver, numGuesses) => {
  if (gameOver) {
    return `Game over with ${numGuesses} guesses!`;
  }

  if (numGuesses === 1) {
    return `You made ${numGuesses} guess!`;
  } else if (numGuesses > 1) {
    return `You made ${numGuesses} guesses!`;
  }

  return ``;
};