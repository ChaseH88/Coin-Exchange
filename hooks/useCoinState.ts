import { useSelector } from "react-redux";
import { RootState } from "state";
import { CoinState } from "state/reducers/coin";

/**
 * This hook will get you the global coin state
 * @returns Coin State
 */
const useCoinState = (): CoinState => (
  useSelector(({ CoinReducer }: RootState) => CoinReducer)
);

export { useCoinState };
