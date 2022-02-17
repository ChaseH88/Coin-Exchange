import React, { FC, useState } from 'react';

// Hooks
import { useCoinState } from 'hooks';
import { useForm } from 'react-hook-form';

// Styles
import { SendStyles } from './styles';

// Components
import { CoinDropdown } from '../CoinDropdown';

// Types
import { CoinInterface } from 'types/interfaces';
import classNames from 'classnames';

export interface SendForm {
  amount: string
  address: string
  coin: string
}

/**
 * The Crypto Modal Send component
 */
const Send: FC = (): JSX.Element => {

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
    clearErrors,
    control
  } = useForm<SendForm>();
  const [selectedCoin, setSelectedCoin] = useState<CoinInterface | null>(null);

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
              onChange: () => clearErrors('amount')
            })}
            style={{
              fontSize: '2em',
            }}
          />
          <label htmlFor="amount">
            <span className={classNames({
              'selected': selectedCoin,
              'not-selected': !selectedCoin
            })}>
              {selectedCoin?.symbol ?? 'XX'}
            </span>
          </label>
          <div className="error">
            {amountError &&
              <span>
                Amount is required
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
            <span>
              Bitcoin Balance
            </span>
          </div>
          <div className="right">
            <span>
              0 {` ${selectedCoin?.symbol ?? 'XX'}`}
            </span>
          </div>
        </div>
      </div>
    </SendStyles>
  )
}

export { Send }
