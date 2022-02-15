import { FC, useEffect } from "react";

// Styles
import { GlobalStyle } from 'utilities/styles/_global-styles';
import { LayoutStyle } from './styles';

// Components
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';

// Redux
import { useDispatch } from "react-redux";
import { calculateTotalBalanceAction } from "state/actions/coin";
import { useWeb3 } from "@3rdweb/hooks";
import { useCoinState } from "hooks";

const Layout: FC = ({ children }) => {

  const dispatch = useDispatch();
  const { address } = useWeb3();
  const { sanityCoins, thirdwebCoins } = useCoinState();

  useEffect(() => {
    async function loadData() {
      await dispatch(calculateTotalBalanceAction(
        address, sanityCoins, thirdwebCoins
      ))
    }
    loadData();
  }, [address, sanityCoins, thirdwebCoins]);

  return (
    <>
      <GlobalStyle />
      <LayoutStyle>
        <div className="container">
          <div className="left">
            <SideNav />
          </div>
          <div className="right">
            <Header />
            <div id="content">
              {children}
            </div>
          </div>
        </div>
      </LayoutStyle>
    </>
  )
}

export { Layout }
