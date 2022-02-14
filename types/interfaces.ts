/**
 * ============================================================================
 * Coins
 * ============================================================================
 */
export interface CoinsResponseInterface {
  ms: number;
  query: string;
  result?: (CoinInterface)[] | null;
}

export interface CoinInterface {
  contractAddress: string;
  logo: Logo;
  name: string;
  symbol: string;
  usdPrice: string;
}

export interface Logo {
  _type: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
