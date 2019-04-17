import React from 'react';
import { getRandomRGBValues } from './Utils';

export const useBackgroundColors = numBoxes => {
  const [backgroundColors, setBackgroundColors] = React.useState([]);

  React.useEffect(() => {
    setBackgroundColors(
      getRandomRGBValues(numBoxes / 2)
    );
  }, []);

  return [backgroundColors, setBackgroundColors];
};