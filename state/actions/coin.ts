import API, { Endpoint } from "classes/API";
import * as types from '../types/coin';

// Types
import { Dispatch } from "redux";
import { CoinInterface, CoinsResponseInterface } from "types/interfaces";

/**
 * Fetches the coins from Sanity
 */
export const getCoinsAction = () => async (dispatch: Dispatch): Promise<void | Dispatch> => {
  try {
    const response = await new API().get(Endpoint.GET_COINS) as CoinsResponseInterface;
    dispatch(setCoinsAction(response.result));
  } catch (error) {
    console.log(error);
  }
}

/**
 * Set the coins to the store
 * @param coins
 * @returns
 */
export const setCoinsAction = (coins: CoinInterface[]) => ({
  type: types.SET_COINS,
  payload: coins
});
