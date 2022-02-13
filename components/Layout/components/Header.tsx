import { useWeb3 } from "@3rdweb/hooks";
import { FC } from "react";

// Styles
import { HeaderStyle } from './styles';

// Utilities
import { formatAddress } from 'utilities/scripts';
import { Button } from "components/General/Button";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Heading } from "components/General/Heading";

const Header: FC = () => {

  const { address, connectWallet, balance } = useWeb3();
  const router = useRouter();

  const handleConnectWallet = () => connectWallet('injected');

  const pageNames = {
    '/': 'Home',
    '/dashboard': 'Dashboard',
    '/prices': 'Prices',
    '/contact': 'Contact'
  };

  return (
    <>
      <HeaderStyle>
        <div className="container">
          <div className="left">
            <Heading
              size='h1'
              title={pageNames[router.asPath] ?
                pageNames[router.asPath] :
                'Coin Exchange'
              }
              margin='0'
            />
          </div>
          <div className="right">
            {address && (
              <Button
                onClick={null}
                text={'Send / Receive'}
              />
            )}
            <div className='address'>
              <span className={classNames({ connected: address })}>
                {address ? 'Wallet' : 'Not'} Connected
              </span>
              {address ?
                <span>
                  {formatAddress(address)}
                </span>
                :
                <Button
                  onClick={handleConnectWallet}
                  text={'Connect'}
                />
              }
            </div>
          </div>
        </div>
        <div className='breadcrumbs'>
          {router.asPath !== '/' && (
            router.asPath
          )}
        </div>
      </HeaderStyle>
    </>
  )
}

export { Header }
