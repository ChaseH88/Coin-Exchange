import styled from 'styled-components';

export interface InputStylesInterface {

}

export const InputStyles = styled.input<InputStylesInterface>`

  padding: .5em .75em;
  font-size: 1em;
  font-family: ${({ theme: { fonts: { font1 } } }) => font1};
  display: inline-block;
  border: 0;
  border-radius: .3em;
  font-weight: 300;
  cursor: pointer;
  transition: ${({ theme: { animationSpeed } }) => animationSpeed}ms ease;

  &:hover, &:focus {
    transform: scale(1.015)
  }
  &:active {
    transform: scale(.9975)
  }

`;
