export const generateRandomBackgroundColors = backgroundColors => {
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
  )
};

export const getRandomRGBValues = (numValues) => {
  return Array(numValues)
    .fill(null)
    .map((backgroundColor) => {
      const rValue = Math.floor(Math.random() * 256);
      const gValue = Math.floor(Math.random() * 256);
      const bValue = Math.floor(Math.random() * 256);
      return `rgb(${rValue},${gValue},${bValue})`;
    });
};