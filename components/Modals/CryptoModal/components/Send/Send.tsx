import { Button } from 'components/General/Button';
import { useCoinState } from 'hooks';
import React, { FC, useState } from 'react';

// Styles
import { SendStyles } from './styles';

export interface SendProps {

}

/**
 * The Crypto Modal Send component
 */
const Send: FC<SendProps> = (): JSX.Element => {

  const [isSending, setIsSending] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<{
    amount: string | null
    address: string | null
    coin: string | null
  }>({
    amount: null,
    address: null,
    coin: null
  });
  const { sanityCoins } = useCoinState();

  const isFormComplete = () => {
    const complete = Object.values(userInput).every(value => value !== null);
    return complete;
  }

  const coinFontSize = () => {
    const l = userInput.amount?.length ?? 0;
    switch (true) {
      case l > 10:
        return '1.1em'
      case l > 7:
        return '1.3em'
      case l > 4:
        return '1.65em'
      default:
        return '2em'
    }
  }

  const handleSubmit = () => {
    if (isFormComplete()) {
      setIsSending(true);
    }
  }

  /**
   * Handle Input Update
   */
  const handleChange = ({ target: { name, type, value } }) => {
    setUserInput({
      ...userInput,
      [name]: type === 'number' ? +value : value
    });
  }

  return (
    <SendStyles>
      <div className="wrapper">
        <div className="details">
          <input
            type="number"
            onChange={handleChange}
            name='amount'
            id='amount'
            maxLength={10}
            placeholder='0'
            style={{
              fontSize: coinFontSize()
            }}
          />
          <label htmlFor="amount">
            BTC
          </label>
        </div>
        <div className="form">
          <div className="field">
            <label htmlFor='address'>
              Address
            </label>
            <input
              onChange={handleChange}
              placeholder='Address'
              name='address'
              id='address'
            />
          </div>
          <div className="field">
            <label htmlFor='coin'>
              Pay With
            </label>
            <select
              name="coin"
              id="coin"
              onChange={handleChange}
            >
              {sanityCoins.map(({
                name
              }) => (
                <option
                  value={name.toLowerCase()}
                >
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="button">
          <Button
            onClick={handleSubmit}
            // disabled={!isFormComplete()}
            text={isSending ? 'Sending...' : 'Send'}
          />
        </div>
        <div className="balance">
          <div className="left">
            <span>
              Bitcoin Balance
            </span>
          </div>
          <div className="right">
            <span>
              0 BTC
            </span>
          </div>
        </div>
      </div>
    </SendStyles>
  )
}

export { Send }
