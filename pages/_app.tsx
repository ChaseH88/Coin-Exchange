import { AppProps } from 'next/app';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const supportedChainIds: number[] = [4];
const connectors = {
  injected: {}
}

/**
 * Main '_app' entry point to be shown on every page
 */
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </ThirdwebWeb3Provider>
  </>
)

export default App;
