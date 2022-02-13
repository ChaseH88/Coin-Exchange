import { useWeb3 } from "@3rdweb/hooks";
import { FC } from "react";

// Styles
import { HeaderStyle } from './styles';

// Utilities
import { formatAddress } from 'utilities/scripts';
import { Button } from "components/General/Button";

const Header: FC = () => {

  const { address, connectWallet, balance } = useWeb3();
  const handleConnectWallet = () => connectWallet('injected');

  return (
    <>
      <HeaderStyle>
        <div className="container">
          <div className="left">
            Page
          </div>
          <div className="right">
            {address ?
              <>
                <Button
                  onClick={null}
                  text={'Send / Receive'}
                />
                <span>
                  {formatAddress(address)}
                </span>
              </>
              :
              <>
                <Button
                  onClick={handleConnectWallet}
                  text={'Connect'}
                />
                <button onClick={handleConnectWallet}>
                  Connect
                </button>
              </>
            }
          </div>
        </div>
        <div className='breadcrumbs'>
          breadcrumbs
        </div>
      </HeaderStyle>
    </>
  )
}

export { Header }
