import { FC, useState } from "react";
import classNames from "classnames";

// Modal
import Modal from 'react-modal';

// Styles
import { HeaderStyle } from './styles';

// Utilities
import { formatAddress } from 'utilities/scripts';

// Hooks
import { useWeb3 } from "@3rdweb/hooks";
import { useRouter } from "next/router";

// Components
import { Button } from "components/General/Button";
import { Heading } from "components/General/Heading";
import { CryptoModal } from "components/Modals";

// Render Modal
Modal.setAppElement('#__next');

const Header: FC = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
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
                onClick={() => setModalIsOpen(true)}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <CryptoModal />
      </Modal>
    </>
  )
}

export { Header }
