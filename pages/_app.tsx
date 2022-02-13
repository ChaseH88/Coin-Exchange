import { AppProps } from 'next/app';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

// Components
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
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ThirdwebWeb3Provider>
  </>
)

export default App;
