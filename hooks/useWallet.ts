import { useWeb3 } from "@3rdweb/hooks";
import { useCoinState } from "hooks";
import { useEffect, useState } from "react";

const useWallet = () => {

  const [totalBalance, setTotalBalance] = useState<number>(0);
  const { sanityCoins, thirdwebCoins } = useCoinState();
  const { address } = useWeb3();

  useEffect(() => {
    calculateTotalBalance()
  }, [address]);

  const calculateTotalBalance = async () => {

    if (!address) {
      setTotalBalance(null);
      return
    };

    let tokenToUsd = {};
    let totalBalance = 0;

    for (const coin of sanityCoins) {
      tokenToUsd[coin.contractAddress] = +coin.usdPrice;
    }

    for await (const coin of thirdwebCoins) {
      const balance = await coin.balanceOf(address);
      totalBalance += +balance.displayValue * tokenToUsd[coin.address];
    }

    setTotalBalance(totalBalance);
  }

  return {
    totalBalance
  }

}

export { useWallet }
