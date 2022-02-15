import { FC } from 'react';
import loader from 'public/images/loading.svg';

// Components
import Image from 'next/image';

// Styles
import { HomeLoaderStyle } from './styles';
import { GlobalStyle } from 'utilities/styles/_global-styles';

interface HomeLoaderProps {
  size?: number
}

const HomeLoader: FC<HomeLoaderProps> = ({ size = 150 }) => (
  <>
    <GlobalStyle />
    <HomeLoaderStyle>
      <div className="wrapper">
        <div className="image">
          <Image
            src={loader}
            width={size}
            height={size}
            priority
          />
        </div>
        <div className="text">
          <h1>
            Loading, please wait...
          </h1>
        </div>
      </div>
    </HomeLoaderStyle>
  </>
);

export { HomeLoader };
