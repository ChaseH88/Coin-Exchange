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

  const { sanityCoins, totalBalance, isCalculating } = useCoinState();
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
            <div
              key={`table-header-${i}`}
              className={className}
            >
              <Heading
                size='h5'
                title={title}
                margin='0'
              />
            </div>
          ))}
        </div>
        {sanityCoins ?
          <>
            {sanityCoins.map(({
              name,
              symbol,
              usdPrice,
              contractAddress,
              logo
            }) => (
              <div
                className="row body"
                key={contractAddress}
              >
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
            ))}
            <div className="row total-balance">
              <strong>
                {isCalculating ?
                  <>
                    Loading...
                  </>
                  :
                  <>
                    {totalBalance > 0 ?
                      `Total Balance: ${formatCurrency(totalBalance)}` :
                      'No Assets'
                    }
                  </>
                }
              </strong>
            </div>
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
