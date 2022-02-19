import React, { FC, useCallback, useEffect, useState } from 'react';
import { TokenModule, CurrencyValue } from '@3rdweb/sdk'

// Hooks
import { useCoinState } from 'hooks';

// Types
import { CoinInterface } from 'types/interfaces';
import { useWeb3 } from '@3rdweb/hooks';


const useCurrentBalance = (selectedCoin: CoinInterface | null) => {

  const [data, setData] = useState<{ module: TokenModule, balance: CurrencyValue } | null>(null);
  const { sanityCoins, thirdwebCoins } = useCoinState();
  const { address } = useWeb3();

  // console.log(data.module)
  console.log(selectedCoin)

  const getBalance = async () => {
    thirdwebCoins.forEach(async coin => {
      if (
        address && selectedCoin &&
        coin.address === selectedCoin.contractAddress
      ) {
        setData({
          module: coin,
          balance: await coin.balance()
        });
      }
    })
  };

  useEffect(() => {
    selectedCoin && getBalance();
  }, [selectedCoin, address, thirdwebCoins, sanityCoins]);

  return data;
}

export { useCurrentBalance }
