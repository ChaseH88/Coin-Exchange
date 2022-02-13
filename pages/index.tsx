import { FC } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { formatAddress } from 'utilities/scripts';

const Home: FC = () => {

  const { address, connectWallet } = useWeb3();

  const handleConnectWallet = () => connectWallet('injected');

  return (
    <div>
      <div>
        <h1>
          Next App
        </h1>
        <p>
          Content!
        </p>
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
