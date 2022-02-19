import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

/**
 * Creates a new ThirdwebSDK instance.
 * @see https://nftlabs.github.io/nftlabs-sdk-ts/sdk.thirdwebsdk.html
 */
const thirdWebSdk = () => (
  new ThirdwebSDK(
    new ethers.Wallet(
      process.env.NEXT_PUBLIC_METAMASK_KEY,
      ethers.getDefaultProvider(
        'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        {

        }
      )
    ),
    {
      maxGasPriceInGwei: 1000000000
    }
  )
);

export const sdk = thirdWebSdk();

(async () => console.log(await sdk.getGasPrice('fastest')))();
