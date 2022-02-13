import { FC } from 'react';
import classNames from 'classnames';

// Icon List
import { icon } from './icon-list';

// Styles
import { IconStyle, IconStyleInterface } from './styles';

export type IconName =
  'arrow-right' | 'angle-right' | 'check' | 'facebook' | 'plus' |
  'minus' | 'star' | 'linkedin' | 'phone' | 'twitter' | 'youtube' |
  'dashboard' | 'prices' | 'contact';

interface IconProps extends IconStyleInterface {
  name: IconName
}

/**
 * The Icon Component
 */
const Icon: FC<IconProps> = ({
  name,
  color,
  size = 'normal',
}): JSX.Element => (
  <IconStyle
    className={classNames('fa', name)}
    size={size}
    color={color}
  >
    {icon[name]}
  </IconStyle>
)

export { Icon }
