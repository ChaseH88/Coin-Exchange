import { FC } from 'react';

// Hooks
import { useCoinState } from 'hooks';

// Styles
import { CoinListStyle } from './styles';

// Components
import { Heading } from 'components/General/Heading';
import { Image } from 'components/General/Image';

// Utilities
import { formatCurrency, sanityImage } from 'utilities/scripts';

const CoinList: FC = () => {

  const { coins } = useCoinState();
  const columns = [
    { title: 'Name', className: 'name' },
    { title: 'Balance', className: 'balance' },
    { title: 'Price', className: 'price' },
  ]

  return (
    <CoinListStyle>
      <div className="table-header">
        <div className="main">
          <Heading
            size='h3'
            title='Your Assets'
            margin='0'
          />
        </div>
        <div className="row headers">
          {columns.map(({ title, className }, i) => (
            <div className={className}>
              <Heading
                size='h5'
                title={title}
                margin='0'
              />
            </div>
          ))}
        </div>
        {coins ?
          <>
            {coins.map(({ name, symbol, usdPrice, contractAddress, logo }, i) => {
              return (
                <div className="row body" key={contractAddress}>
                  <div className={'name'}>
                    <Image
                      src={sanityImage(logo)}
                      className='logo'
                      height={40}
                      width={40}
                    />
                    <div className="text">
                      <span>{name}</span>
                      <span>{symbol}</span>
                    </div>
                  </div>
                  <div className={'balance'}>
                    <div className="text">
                      <span>
                        {formatCurrency(0)}
                      </span>
                      <span>
                        0.00 {symbol}
                      </span>
                    </div>
                  </div>
                  <div className={'price'}>
                    <span>
                      {formatCurrency(+usdPrice)}
                    </span>
                  </div>
                </div>
              )
            })}
          </>
          :
          <>
            No Coins Found
          </>
        }
      </div>
    </CoinListStyle>
  )
}

export { CoinList }
