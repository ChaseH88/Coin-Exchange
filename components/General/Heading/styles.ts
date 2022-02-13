import styled from 'styled-components';

export interface HeadingStyleInterface {
  align?: 'left' | 'center' | 'right',
  color?: string | null
  margin?: string | null
}

export const HeadingStyle = styled.div<HeadingStyleInterface>`

  h1, h2, h3, h4 {
    ${({ color }) => color && `color: ${color};`}
    line-height: 110%;
    text-align: ${({ align }) => align};
    ${({ margin }) => `margin: ${margin}`};
  }

  h2 {
    display: block;
    color: #40729B;
    font-weight: bold;
    font-size: 2rem;
  }

`;
