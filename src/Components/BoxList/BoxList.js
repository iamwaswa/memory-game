import React from 'react';
import { ListOfBoxes } from './Styles';
import { Box } from '../Box/Box';

const MATCHING_BOX_NOT_FOUND = -1;

export const BoxList = ({ backgroundColors, setNumGuesses, boxManager, setBoxManager }) => {
  const handleBoxClick = (index) => {

    if (!boxManager[index].showBackground) {
      setNumGuesses((prevNumGueses) => {
        return prevNumGueses + 1;
      });
    }

    const { backgroundColor } = boxManager[index];
    const matchingIndex = findMatching(index, backgroundColor);
    
    if (matchingIndex === MATCHING_BOX_NOT_FOUND) {
      setBoxManager({
        ...resetUnmatched(),
        [index]: {
         ...boxManager[index],
          showBackground: true,
        },
      });
    } else {
      setBoxManager({
        ...boxManager,
        [index]: {
         ...boxManager[index],
          showBackground: true,
          matched: true,
        },
        [matchingIndex]: {
          ...boxManager[matchingIndex],
           showBackground: true,
           matched: true,
        },
      });
    }
  };

  const findMatching = (currentIndex, currentBackgroundColor) => {
    const matchedBoxes = Object
      .values(boxManager)
      .filter(({ backgroundColor, showBackground, index }) => {
        return currentBackgroundColor === backgroundColor &&
               currentIndex !== index                     &&
               showBackground;
      }
    );
    if (matchedBoxes.length) {
      return matchedBoxes[0].index;
    }
    return MATCHING_BOX_NOT_FOUND;
  };

  const resetUnmatched = () => {
    return Object
      .values(boxManager)
      .reduce((resetBoxManager, currentBox, index) => {
        if (!currentBox.matched && 
            currentBox.showBackground) {
          resetBoxManager[index] = {
            ...currentBox,
            showBackground: false,
          };
        } else {
          resetBoxManager[index] = currentBox;
        }

        return resetBoxManager;
      }, {});
  };

  const renderBoxes = () => {
    if (boxManager) {
      return Object
        .values(boxManager)
        .map(({ backgroundColor, showBackground, index }) => {
          return (
            <Box
              key={index}
              index={index}
              backgroundColor={backgroundColor}
              showBackground={showBackground}
              handleBoxClick={handleBoxClick}
            />
          );
        }
      );
    }

    return null;
  };

  if (backgroundColors.length) {
    return (
      <ListOfBoxes>
        { renderBoxes() }
      </ListOfBoxes>
    );
  }

  return null;
};