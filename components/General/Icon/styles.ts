import styled from 'styled-components';

const sizes = {
  'small': '90%',
  'normal': '100%',
  'large': '110%'
}

export interface IconStyleInterface {
  size?: 'small' | 'normal' | 'large'
  color?: string
}

export const IconStyle = styled.span<IconStyleInterface>`
  ${({ size, color }) => `
    display: inline-block;
    color: ${color ? color : 'inherit'};
    font-size: ${sizes[size!]}};
    line-height: 0;
  `};
`;
