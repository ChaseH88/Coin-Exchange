import React, { FC, useCallback, useEffect, useState } from 'react';
import { CurrencyValue } from '@3rdweb/sdk'

// Hooks
import { useCoinState } from 'hooks';

// Types
import { CoinInterface } from 'types/interfaces';
import { useWeb3 } from '@3rdweb/hooks';


const useCurrentBalance = (selectedCoin: CoinInterface | null) => {

  const [data, setData] = useState<CurrencyValue | null>(null);
  const { sanityCoins, thirdwebCoins } = useCoinState();
  const { address } = useWeb3();

  const getBalance = useCallback(() => {
    thirdwebCoins.forEach(async coin => {
      if (address && selectedCoin) {
        if (coin.address === selectedCoin.contractAddress) {
          setData(await coin.balanceOf(address))
        }
      }
    })
  }, [selectedCoin, address, thirdwebCoins]);

  useEffect(() => {
    selectedCoin && getBalance();
  }, [selectedCoin, address, thirdwebCoins, sanityCoins]);

  return data;
}

export { useCurrentBalance }
