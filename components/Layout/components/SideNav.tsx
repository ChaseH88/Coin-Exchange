import { FC } from "react";

// Components
import Link from "next/link";
import { Heading } from "components/General/Heading";
import { Icon, IconName } from "components/General/Icon";

// Styles
import { SideNavStyle } from './styles';

const menu = [
  { text: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
  { text: 'Prices', icon: 'prices', href: '/prices' },
  { text: 'Contact', icon: 'contact', href: '/contact' },
];

const SideNav: FC = () => (
  <>
    <SideNavStyle>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              Coin Exchange
            </a>
          </Link>
        </div>
        <nav>
          <div className="title">
            <Heading size='h3' title='Main Menu' />
          </div>
          <div className="links">
            <ul>
              {menu.map(({ text, icon, href }, i) => (
                <li key={`sidenav-${i}`}>
                  <Link href={href}>
                    <a>
                      <Icon name={icon as IconName} />
                      <span>{text}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="content">
          <div className="wrapper">
            <Heading size='h3' title='Content' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <footer>
          <div className="copyright">
            <span className='name'>
              Coin Exchange
            </span>
            <span className='tagline'>
              &copy; 2022 All Rights Reserved
            </span>
            <span className='version'>
              v0.1.0
            </span>
          </div>
        </footer>
      </div>
    </SideNavStyle>
  </>
)

export { SideNav }
