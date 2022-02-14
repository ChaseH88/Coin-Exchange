import * as types from '../types/coin';
import { Action } from '..';
import { CoinInterface, TokenModule } from 'types/interfaces';

export interface CoinState {
  sanityCoins: CoinInterface[] | null
  thirdwebCoins: TokenModule[] | null
  totalBalance: number | null,
  isCalculating: boolean
}

export const initialState: CoinState = {
  sanityCoins: null,
  thirdwebCoins: null,
  totalBalance: null,
  isCalculating: true
};

const CoinReducer = (state: CoinState = initialState, { type, payload }: Action): CoinState => {
  switch (type) {

    // Set Coins
    case types.SET_SANITY_COINS:
      return {
        ...state,
        sanityCoins: payload
      };

    case types.SET_ETHERS_COINS:
      return {
        ...state,
        thirdwebCoins: payload
      };

    // User Coin
    case types.UPDATE_TOTAL_BALANCE:
      return {
        ...state,
        ...payload // totalBalance, isCalculating
      };

    // default
    default:
      return state;
  }
};

export default CoinReducer;
