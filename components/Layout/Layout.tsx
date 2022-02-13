import { FC } from "react";

// Styles
import { GlobalStyle } from 'utilities/_global-styles';
import { LayoutStyle } from './styles';

// Components
import { Header } from './components/Header';
import { SideNav } from './components/SideNav';

const Layout: FC = ({ children }) => (
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

export { Layout }
