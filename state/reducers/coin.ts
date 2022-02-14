import * as types from '../types/coin';
import { Action } from '..';
import { CoinInterface } from 'types/interfaces';

export interface CoinState {
  coins: CoinInterface[] | null
}

export const initialState: CoinState = {
  coins: null
};

const CoinReducer = (state: CoinState = initialState, { type, payload }: Action): CoinState => {
  switch (type) {

    // Set Coins
    case types.SET_COINS:
      return {
        ...state,
        coins: payload
      };

    // default
    default:
      return state;
  }
};

export default CoinReducer;
