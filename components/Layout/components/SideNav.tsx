import { Heading } from "components/General/Heading";
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
            <Heading size='h1' title='Main Menu' />
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
