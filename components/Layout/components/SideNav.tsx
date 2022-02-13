import { FC } from "react";

// Styles
import { SideNavStyle } from './styles';

const SideNav: FC = () => (
  <>
    <SideNavStyle>
      <div className="container">
        <div className="logo">
          Coin Exchange
        </div>
        <nav>
          <div className="title">
            <h3>
              Main Menu
            </h3>
          </div>
          <div className="links">
            <ul>
              <li>
                Dashboard
              </li>
              <li>
                Prices
              </li>
              <li>
                Contact
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </SideNavStyle>
  </>
)

export { SideNav }
