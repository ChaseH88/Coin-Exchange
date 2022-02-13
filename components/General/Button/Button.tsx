import { FC } from 'react';
import classNames from 'classnames';

// Styles
import { ButtonStyles, ButtonStylesInterface } from './styles';

export interface ButtonProps extends ButtonStylesInterface {
  text: string
  className?: string
  onClick: any
}

/**
 * The Button component
 */
const Button: FC<ButtonProps> = ({
  text,
  size = 'normal',
  margin = '.2rem',
  variant = 'normal',
  className,
  onClick
}): JSX.Element => (
  <>
    <ButtonStyles
      size={size}
      margin={margin}
      onClick={onClick}
      variant={variant}
      className={
        classNames('button', className)
      }
    >
      {text}
    </ButtonStyles>
  </>
)

export { Button }
