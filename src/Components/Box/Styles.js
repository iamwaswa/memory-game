import styled from 'styled-components';

export const BoxContainer = styled.section`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 1rem;
  cursor: pointer;
  background-color: ${({ showBackground, backgroundColor }) => {
    return showBackground ? backgroundColor : `gray`;
  }};
  box-shadow: 0px 2px 5px rgb(21, 21, 21);
  transition: all 300ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 0px 1px 3px rgb(21, 21, 21);
  }

  :active {
    box-shadow: none;
  }
`;