import styled from 'styled-components';

export const ListOfBoxes = styled.main`
  display: grid;
  grid-template-rows: repeat(${({ numBoxes }) => {
    return numBoxes / 2;
  }}, auto);
  grid-template-columns: repeat(${({ numBoxes }) => {
    return 2;
  }}, auto);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding: 2rem;
  min-width: 320px;
  min-height: 480px;

  @media (min-width: 700px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 4);
    }}, auto);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 4;
    }}, auto);
  }

  @media (min-width: 800px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 6);
    }}, auto);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 6;
    }}, auto);
  }

  @media (min-width: 1440px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 8);
    }}, auto);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 8;
    }}, auto);
  }
`;