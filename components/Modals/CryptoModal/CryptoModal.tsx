import { FC, useState } from 'react';

// Styles
import { CryptoModalStyles } from './styles';

// Components
import { Send } from './components/Send';

export interface CryptoModalProps {

}

/**
 * The Crypto Modal component
 */
const CryptoModal: FC<CryptoModalProps> = (): JSX.Element => {

  const [isSend, setIsSend] = useState<boolean>(true);

  return (
    <CryptoModalStyles>
      <div className="wrapper">
        <div className="tabs">
          <div className="left">
            <button
              onClick={() => setIsSend(true)}
              className={isSend ? 'active' : ''}
            >
              Send
            </button>
          </div>
          <div className="right">
            <button
              onClick={() => setIsSend(false)}
              className={!isSend ? 'active' : ''}
            >
              Receive
            </button>
          </div>
        </div>
        <div className="content">
          {isSend ?
            <Send />
            :
            <>
              Receive
            </>
          }
        </div>
      </div>
    </CryptoModalStyles>
  )
}

export { CryptoModal }
