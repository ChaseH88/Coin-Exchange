import { FC } from "react";

// Components
import NextImage from 'next/image';

// Styles
import { ImageStyle } from './styles';

interface ImageProps {
  src: string
  className?: string
  alt?: string
  lazyLoad?: boolean
  width?: number
  height?: number
}

const Image: FC<ImageProps> = ({
  src,
  alt = 'Image',
  className,
  lazyLoad = true,
  width = 200,
  height = 200
}): JSX.Element => (
  <ImageStyle>
    <NextImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={lazyLoad ? 'lazy' : 'eager'}
    />
  </ImageStyle>
)

export { Image };
