import { FC } from 'react';
import classNames from 'classnames';

// Styles
import { InputStyles, InputStylesInterface } from './styles';

export interface InputProps extends InputStylesInterface {
  placeholder: string
  className?: string
  onChange: any
}

/**
 * The Input component
 */
const Input: FC<InputProps> = ({
  placeholder,
  className,
  onChange
}): JSX.Element => (
  <>
    <InputStyles
      onChange={onChange}
      className={
        classNames('button', className)
      }
      placeholder={placeholder}
    />
  </>
)

export { Input }
