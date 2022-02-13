import { AppProps } from 'next/app';

/**
 * Main '_app' entry point to be shown on every page
 */
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <div className='container'>
      <Component {...pageProps} />
    </div>
  </>
)

export default App;
