import { FC } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { emptyArray, formatAddress } from 'utilities/scripts';

const Home: FC = () => {

  const { address, connectWallet } = useWeb3();

  const handleConnectWallet = () => connectWallet('injected');

  return (
    <div>
      <div>
        <h1>
          Next App
        </h1>
        {emptyArray(100).map((_, i) => (
          <p key={'test-' + i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis distinctio culpa labore odit doloribus magnam eaque, dolor fugit nisi perspiciatis, saepe aliquid sed aperiam porro aliquam minus eos. Minus, voluptates.
          </p>
        ))}
      </div>
      <div>
        {address ?
          <span>
            {formatAddress(address)}
          </span>
          :
          <button onClick={handleConnectWallet}>
            Connect Wallet
          </button>
        }
      </div>
    </div>
  )
}

export default Home;
