import React from 'react';

export const useBackgroundColors = numBoxes => {
  const [backgroundColors, setBackgroundColors] = React.useState([]);

  React.useEffect(() => {
    setBackgroundColors(
      Array(numBoxes / 2)
      .fill(null)
      .map((backgroundColor) => {
        const rValue = Math.floor(Math.random() * 256);
        const gValue = Math.floor(Math.random() * 256);
        const bValue = Math.floor(Math.random() * 256);
        return `rgb(${rValue},${gValue},${bValue})`;
      })
    );
  }, []);

  return backgroundColors;
};