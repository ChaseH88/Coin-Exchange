import React, { FC, useCallback, useState } from 'react';
import { BigNumber } from 'ethers';

// Hooks
import { useCoinState, useCurrentBalance } from 'hooks';
import { useForm } from 'react-hook-form';
import { useWeb3 } from '@3rdweb/hooks';

// Styles
import { SendStyles } from './styles';

// Components
import { CoinDropdown } from '../CoinDropdown';

// Types
import { CoinInterface } from 'types/interfaces';
import classNames from 'classnames';
import { Icon } from 'components/General/Icon';

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
  const { address } = useWeb3();
  const coin = useCurrentBalance(selectedCoin);
  const { sanityCoins } = useCoinState();
  const [complete, setComplete] = useState(false);
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

  const onSubmit = async (data: SendForm) => {
    try {
      const amount = data.amount.toString().concat('000000000000000000')
      const response = await coin.module.transfer(
        data.address,
        amount
      );
      // console.log(response);
      setComplete(true);
      setTimeout(() => {
        setComplete(false);
      }, 5000);
    }
    catch (err) {
      console.log(err);
    }
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
              max: coin?.balance?.displayValue ?? 0,
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
          <button
            type="submit"
            disabled={complete || isSubmitting}
            className={classNames({
              complete
            })}
          >
            {complete ?
              <>
                Complete
                <Icon name='check' />
              </>
              :
              <>
                {isSubmitting ? 'Sending...' : 'Send'}
              </>
            }
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
              {coin?.balance?.displayValue ?? 'N/A'}
              {` ${selectedCoin?.symbol ?? 'XX'}`}
            </span>
          </div>
        </div>
      </div>
    </SendStyles>
  )
}

export { Send }
