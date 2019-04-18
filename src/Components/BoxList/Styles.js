import styled from 'styled-components';
import { getClosestDivisor } from './Utils';

export const ListOfBoxesContainer = styled.main `
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 320px;
  height: auto;
  min-height: 480px;
  padding-top: 2rem;
`;

export const ListOfBoxes = styled.main`
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

  @media (min-width: 428px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 3);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 3);
    }}, 100px);
  }

  @media (min-width: 560px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 4);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 4);
    }}, 100px);
  }

  @media (min-width: 698px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 5);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 5);
    }}, 100px);
  }

  @media (min-width: 820px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 6);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 6);
    }}, 100px);
  }

  @media (min-width: 956px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 7);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 7);
    }}, 100px);
  }

  @media (min-width: 1086px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 8);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 8);
    }}, 100px);
  }

  @media (min-width: 1270px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 9);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 9);
    }}, 100px);
  }

  @media (min-width: 1440px) {
    grid-template-rows: repeat(${({ numBoxes }) => {
      return numBoxes / getClosestDivisor(numBoxes, 10);
    }}, 100px);
    grid-template-columns: repeat(${({ numBoxes }) => {
      return getClosestDivisor(numBoxes, 10);
    }}, 100px);
  }
`;