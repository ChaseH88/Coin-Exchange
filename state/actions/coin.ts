import API, { Endpoint } from "classes/API";
import * as types from '../types/coin';

// Types
import { Dispatch } from "redux";
import { CoinInterface, CoinsResponseInterface, TokenModule } from "types/interfaces";
import { sdk } from "utilities/scripts/third-web-sdk";

/**
 * Fetches the coins from Sanity
 */
export const getSanityCoinsAction = () => async (dispatch: Dispatch): Promise<void | Dispatch> => {
  try {
    dispatch({ type: types.GET_SANITY_COINS });
    const response = await new API().get(Endpoint.GET_SANITY_COINS) as CoinsResponseInterface;
    dispatch(setThirdwebCoinsActions(response.result.map((coin: CoinInterface) => (
      sdk.getTokenModule(coin.contractAddress)
    ))));
    dispatch(setSanityCoinsAction(response.result));
  } catch (error) {
    console.log(error);
  }
}

/**
 * Set the coins to the store
 * @param coins
 * @returns
 */
export const setSanityCoinsAction = (coins: CoinInterface[]) => ({
  type: types.SET_SANITY_COINS,
  payload: coins
});

/**
 * Set the coins to the store
 * @param coins
 * @returns
 */
export const setThirdwebCoinsActions = (coins: TokenModule[]) => ({
  type: types.SET_ETHERS_COINS,
  payload: coins
});

/**
 * Action to calculate the users total balance
 * @param address
 * @param sanityCoins
 * @param thirdwebCoins
 * @returns
 */
export const calculateTotalBalanceAction = (
  address: string, sanityCoins: CoinInterface[], thirdwebCoins: TokenModule[]
) => async (dispatch: Dispatch): Promise<void | Dispatch> => {

  if (!address) return;

  let tokenToUsd = {};
  let totalBalance = 0;

  for (const coin of sanityCoins) {
    tokenToUsd[coin.contractAddress] = +coin.usdPrice;
  }

  for await (const coin of thirdwebCoins) {
    const balance = await coin.balanceOf(address);
    totalBalance += +balance.displayValue * tokenToUsd[coin.address];
  }

  dispatch(setTotalBalanceAction(totalBalance));
}

/**
 * Set the total balance of the wallet
 * @param totalBalance should be a number but can be null too
 */
export const setTotalBalanceAction = (totalBalance: number | null) => ({
  type: types.UPDATE_TOTAL_BALANCE,
  payload: {
    totalBalance,
    isCalculating: false
  }
});
