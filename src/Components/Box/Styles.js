import styled from 'styled-components';

export const BoxContainer = styled.section`
  width: 100px;
  height: 100px;
  border-radius: 10px;
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