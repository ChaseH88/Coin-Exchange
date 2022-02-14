import { AppProps } from 'next/app';

// Hooks
import { useEffect, useState } from 'react';

// Redux
import { wrapper } from 'state';
import { useDispatch } from 'react-redux';
import { getSanityCoinsAction } from 'state/actions/coin';

// Components
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { Layout } from 'components/Layout';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from 'utilities/styles/theme';

const supportedChainIds: number[] = [4];
const connectors = {
  injected: {}
}

/**
 * Main '_app' entry point to be shown on every page
 */
const NextApp = ({ Component, pageProps }: AppProps) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      await dispatch(getSanityCoinsAction());
      setIsLoading(false);
    }
    loadData();
  }, []);

  return (
    <>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <ThemeProvider theme={theme}>
          {isLoading ?
            <div>Loading...</div>
            :
            <Layout>
              <Component {...pageProps} />
            </Layout>
          }
        </ThemeProvider>
      </ThirdwebWeb3Provider>
    </>
  );
}

const App = wrapper.withRedux(NextApp);

export default App;
