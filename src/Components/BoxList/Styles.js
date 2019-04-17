import styled from 'styled-components';

export const ListOfBoxes = styled.main`
  text-align: center;
  display: grid;
  grid-template-rows: repeat(${({ numBoxes }) => {
    return numBoxes / 2;
  }}, 100px);
  grid-template-columns: repeat(${({ numBoxes }) => {
    return 2;
  }}, 100px);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  padding: 2rem;
  min-width: 320px;
  min-height: 480px;

  @media (min-width: 428px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 3);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 3;
    }}, 100px);
  }

  @media (min-width: 560px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 4);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 4;
    }}, 100px);
  }

  @media (min-width: 698px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 5);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 5;
    }}, 100px);
  }

  @media (min-width: 820px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 6);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 6;
    }}, 100px);
  }

  @media (min-width: 956px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 7);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 7;
    }}, 100px);
  }

  @media (min-width: 1086px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return Math.round(numBoxes / 8);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return 8;
    }}, 100px);
  }
`;