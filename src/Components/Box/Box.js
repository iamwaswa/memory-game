import React from 'react';
import { BoxContainer } from './Styles';

export const Box = ({ index, backgroundColor, showBackground, handleBoxClick }) => {

  const onClickHandler = () => {
    handleBoxClick(index);
  };

  return (
    <BoxContainer
      showBackground={showBackground}
      backgroundColor={backgroundColor}
      onClick={onClickHandler}
    />
  );
};
