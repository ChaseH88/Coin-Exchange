import React, { FC, useState } from 'react';

// Utilities
import { sanityImage } from 'utilities/scripts';

// Styles
import { CoinDropdownStyles } from './styles';

// Types
import { CoinInterface } from 'types/interfaces';
import classNames from 'classnames';

// Components
import Image from 'next/image';

export interface CoinDropdownProps {
  sanityCoins: CoinInterface[]
  placeholder?: string
}

/**
 * The Coin Select dropdown component
 */
const CoinDropdown: FC<CoinDropdownProps> = ({
  sanityCoins,
  placeholder = 'Select a coin'
}): JSX.Element => {

  const [data, setData] = useState<{
    items: CoinInterface[],
    showItems: boolean
    selectedCoin: CoinInterface | null
  }>({
    items: sanityCoins,
    showItems: false,
    selectedCoin: null
  });

  const dropDown = () => {
    setData(prevState => ({
      ...data,
      showItems: !prevState.showItems
    }));
  };

  const selectItem = (item: CoinInterface) => {
    setData({
      ...data,
      selectedCoin: item,
      showItems: false
    });
  };

  return (
    <CoinDropdownStyles>
      <div className="wrapper">
        <div
          className="selected-item"
          onClick={dropDown}
        >
          {data.selectedCoin ?
            <>
              <Image
                src={sanityImage(data.selectedCoin.logo)}
                className='logo'
                height={30}
                width={30}
                loading='eager'
              />
              <span className='title'>
                {data.selectedCoin.name}
              </span>
            </>
            :
            <>
              <span>
                {placeholder}
              </span>
            </>
          }
        </div>
        <div
          className="arrow"
          onClick={dropDown}
        >
          <span
            className={classNames({
              'arrow-down': data.showItems,
              'arrow-up': !data.showItems
            })}
          >
            {data.showItems ? '▲' : '▼'}
          </span>
        </div>
        <div
          style={{ display: data.showItems ? "block" : "none" }}
          className={"items"}
        >
          {data.items.map((item) => (
            <div
              key={item.contractAddress}
              onClick={() => selectItem(item)}
              className={data.selectedCoin === item ? "selected" : ""}
            >
              <Image
                src={sanityImage(item.logo)}
                className='logo'
                height={40}
                width={40}
                loading='eager'
              />
              <span>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CoinDropdownStyles>
  )
}

export { CoinDropdown }
