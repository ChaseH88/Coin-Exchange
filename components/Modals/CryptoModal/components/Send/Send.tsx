import { Image } from 'components/General/Image';
import { useCoinState } from 'hooks';
import React, { FC } from 'react';
import { sanityImage } from 'utilities/scripts';
import { useForm } from 'react-hook-form';

// Styles
import { SendStyles } from './styles';

export interface SendProps {

}

interface SendForm {
  amount: string
  address: string
  coin: string
}

/**
 * The Crypto Modal Send component
 */
const Send: FC<SendProps> = (): JSX.Element => {

  const { sanityCoins } = useCoinState();
  const {
    register,
    handleSubmit,
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
              onChange: () => clearErrors('amount')
            })}
            style={{
              fontSize: '2em',
            }}
          />
          <label htmlFor="amount">
            BTC
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
            <select
              name="coin"
              id="coin"
              {...register('coin', {
                required: true,
                onChange: () => clearErrors('coin'),
                value: null
              })}
            >
              {sanityCoins.map(({
                name,
                logo
              }) => (
                <option
                  value={name.toLowerCase()}
                >
                  {/* Make a custom select component */}
                  <Image
                    src={sanityImage(logo)}
                    className='logo'
                    height={40}
                    width={40}
                  />
                  {name}
                </option>
              ))}
            </select>
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
              0 BTC
            </span>
          </div>
        </div>
      </div>
    </SendStyles>
  )
}

export { Send }
