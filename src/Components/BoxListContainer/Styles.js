import styled from 'styled-components';

export const NavBar = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(21, 21, 21, 0.6);
  color: white;
  min-width: 320px;
`;

export const RightSectionItem = styled.p`
  cursor: pointer;
`;

export const RightSectionContainer = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: ${({ numColumns }) => {
    return `repeat(${numColumns}, auto)`;
  }};
  grid-column-gap: 1rem;
`;

export const Display = styled.section`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto;
  grid-row-gap: 0.5rem;
  text-align: center;
  padding: 1rem;
`;