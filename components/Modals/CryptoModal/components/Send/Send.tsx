import React, { FC, useCallback, useState } from 'react';

// Hooks
import { useCoinState, useCurrentBalance } from 'hooks';
import { useForm } from 'react-hook-form';

// Styles
import { SendStyles } from './styles';

// Components
import { CoinDropdown } from '../CoinDropdown';

// Types
import { CoinInterface } from 'types/interfaces';
import classNames from 'classnames';
import { useWeb3 } from '@3rdweb/hooks';

export interface SendForm {
  amount: string
  address: string
  coin: string
}

/**
 * The Crypto Modal Send component
 */
const Send: FC = (): JSX.Element => {

  const [selectedCoin, setSelectedCoin] = useState<CoinInterface | null>(null);
  const balance = useCurrentBalance(selectedCoin);
  const { sanityCoins } = useCoinState();
  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      isSubmitting,
      errors: {
        amount: amountError,
        address: addressError,
        coin: coinError
      }
    },
    clearErrors
  } = useForm<SendForm>();

  const onSubmit = (data: SendForm) => {
    alert(JSON.stringify(data));
  };

  return (
    <SendStyles onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <div className="details">
          <input
            id='amount'
            type="number"
            placeholder='0'
            {...register('amount', {
              required: true,
              onChange: () => clearErrors('amount'),
              max: +balance?.displayValue ?? 0,
              min: 0
            })}
            style={{
              fontSize: '2em',
            }}
          />
          <label
            htmlFor="amount"
            className={classNames({
              'selected': selectedCoin,
              'not-selected': !selectedCoin
            })}
          >
            {selectedCoin?.symbol ?? 'XX'}
          </label>
          <div className="error">
            {amountError &&
              <span>
                {amountError.type === 'max' && 'You don\'t have enough funds'}
                {amountError.type === 'min' && 'Enter a valid amount'}
                {amountError.type === 'required' && 'Amount is required'}
              </span>
            }
          </div>
        </div>
        <div className="form">
          <div className="field">
            <label htmlFor='address'>
              Address
            </label>
            <input
              id='address'
              type="text"
              placeholder='Address'
              {...register('address', {
                required: true,
                onChange: () => clearErrors('address')
              })}
            />
          </div>
          <div className="field">
            <label htmlFor='coin'>
              Pay With
            </label>
            <CoinDropdown
              sanityCoins={sanityCoins}
              register={register}
              setValue={setValue}
              setSelectedCoin={setSelectedCoin}
            />
          </div>
        </div>
        <div className="errors">
          {addressError && coinError ?
            <span>
              Please enter an address and select a coin.
            </span>
            :
            <span>
              {addressError && 'Please enter an address.'}
              {coinError && 'Please select a coin.'}
            </span>
          }
        </div>
        <div className="button">
          <button type="submit">
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
        <div className="balance">
          <div className="left">
            <span style={{
              opacity: selectedCoin ? 1 : 0
            }}>
              {selectedCoin ? `${selectedCoin?.name} Balance` : 'N/A'}
            </span>
          </div>
          <div className="right">
            <span>
              {balance ? balance.displayValue : 'N/A'}
              {` ${selectedCoin?.symbol ?? 'XX'}`}
            </span>
          </div>
        </div>
      </div>
    </SendStyles>
  )
}

export { Send }
