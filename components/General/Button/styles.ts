import styled from 'styled-components';

// Styles
import { darkenColor } from 'utilities/styles/helpers';
import { theme } from 'utilities/styles/theme';

export interface ButtonStylesInterface {
  size?: ButtonSizes
  margin?: string
  variant?: ButtonTypes
}

type ButtonSizes = 'small' | 'normal' | 'large'
type ButtonTypes = 'normal' | 'alert' | 'success'

/**
 * Buttons size configs
 */
const sizes = {
  small: {
    font: '.7em',
    padding: '.25rem 1.25rem'
  },
  normal: {
    font: '.9em',
    padding: '.25rem 1.25rem'
  },
  large: {
    font: '1.2em',
    padding: '.2rem 2.6rem'
  }
}

/**
 * Different colors and backgrounds
 */
const variants = {
  normal: {
    idle: {
      background: theme.colors.blue,
      color: theme.colors.offWhite
    },
    hover: {
      background: darkenColor(theme.colors.blue),
      color: theme.colors.offWhite
    }
  }
}

export const ButtonStyles = styled.button<ButtonStylesInterface>`

  display: inline-block;
  border: 0;
  border-radius: .3em;
  font-weight: 300;
  cursor: pointer;
  transition: ${({ theme: { animationSpeed } }) => animationSpeed}ms ease;
  padding: ${({ size }) => sizes[size!].padding};
  font-size: ${({ size }) => sizes[size!].font};
  ${({ variant }) => variants[variant!].idle};

  &:hover, &:focus {
    ${({ variant }) => variants[variant!].hover};
    transform: scale(1.015)
  }
  &:active {
    transform: scale(.9975)
  }

`;
