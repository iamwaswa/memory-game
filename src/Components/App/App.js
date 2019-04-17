import React from 'react';
import { GlobalStyle } from '../../GlobalStyles';
import { BoxList } from '../BoxList/BoxList';

export const App = () => {
  const [numGuesses, setNumGuesses] = React.useState(0);

  return (
    <>
      <GlobalStyle />
      <nav>
        <p>
          { `You made ${numGuesses} gueses!` }
        </p>
        <button>
          New Game
        </button>
      </nav>
      <BoxList 
        numBoxes={16} 
        setNumGuesses={setNumGuesses}
      /> 
    </>
  );
};