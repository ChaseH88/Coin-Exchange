import classNames from 'classnames';
import { FC, createElement } from 'react';

// Styled
import { HeadingStyle, HeadingStyleInterface } from './styles';

interface HeadingProps extends HeadingStyleInterface {
  title: string
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  container?: boolean
}

/**
 * The Button component for Adjusting Expectations
 */
const Heading: FC<HeadingProps> = ({
  title,
  size = 'h1',
  container = true,
  align = 'left',
  color = null,
  margin = null
}): JSX.Element => (
  <>
    <HeadingStyle
      className="title"
      align={align}
      color={color!}
      margin={margin}
    >
      <div className={classNames({ container })}>
        {createElement(size, {}, title)}
      </div>
    </HeadingStyle>
  </>
)

export { Heading }
