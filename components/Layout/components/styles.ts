import styled from 'styled-components';
import { gradient, lightenColor } from 'utilities/styles/helpers';

const headerPadding = 1.2;

export const HeaderStyle = styled.header`

  & > .container {
    padding: ${(headerPadding * 1.1) + headerPadding}em ${headerPadding}em;
    display: flex;
    align-items: center;

    & > .left {
      flex: 0 0 300px;
    }

    & > .right {
      flex: 1 1 auto;
      text-align: right;
    }
  }

  // Wallet Connected Message
  .address {
    display: inline-block;
    text-align: center;

    span {
      display: block;

      &.connected:first-child {
        color: #1bda1b;
      }

      &:first-child {
        color: #ff8383;
        font-size: .8em;
        margin: 0 0 3px;
      }
      &:nth-child(2) {
        font-weight: bold;
        margin: 0 0 3px;
      }
    }
  }

  // BreadCrumbs
  & .breadcrumbs {
    background: ${({ theme: { colors: { darkBlackGreen2 } } }) => darkBlackGreen2};
    padding: 0 ${headerPadding}em;
    height: 3em;
    display: flex;
    align-items: center;
  }

`;

export const SideNavStyle = styled.section`

  // Sub headers
  h3 {
    font-size: 1.2em;
    font-weight: 700;
    margin: 0 0 .5em;
    color: ${({ theme: { colors: { lightBlackGreen } } }) => lightenColor(lightBlackGreen, .3)};
    font-family: ${({ theme: { fonts: { font1 } } }) => font1};
  }

  // Logo
  .logo {
    margin: 0 0 1em;
    border-bottom: 1px solid ${({ theme: { colors: { darkBlackGreen } } }) => darkBlackGreen};

    a {
      display: block;
      margin: 1.5rem;
      font-weight: 700;
      font-size: 1.5em;
      text-decoration: none;
      color: ${({ theme: { colors: { white } } }) => white};
    }
  }

  // Nav
  nav {
    margin: 2.5em 0 4em;

    & > .title {
      padding: 0 1.5em;
      margin: 0 0 .75em;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;

      li {
        a {
          display: flex;
          align-items: center;
          padding: 1em 4em;
          transition: ${({ theme: { animationSpeed } }) => `all ${animationSpeed + 200}ms ease-in-out`};
          color: ${({ theme: { colors: { white } } }) => white};
          font-weight: 700;
          text-decoration: none;

          &:hover, &:focus {
            box-shadow: inset -30em -1em 0 -18px ${({ theme: { colors: { blue } } }) => blue};
          }

          .fa {
            font-size: 1.5em;
            flex: 0 0 40px;
          }
        }
      }
    }
  }

  // Content
  .content {
    padding: 0 1.5em;

    .wrapper {
      background: ${({ theme: { colors: { blue } } }) => blue};
      padding: 1.5em 1.15em;
      border-radius: .5em;
      color: ${({ theme: { colors: { white } } }) => white};

      h3 {
        color: inherit;
      }
      p {
        line-height: 1.6em;
      }
    }
  }

  // Footer
  footer {
    margin: 3em 0 0;
    padding: 0em 1.5em;

    span {
      display: block;
      color: ${({ theme: { colors: { lightBlackGreen } } }) => lightenColor(lightBlackGreen, .3)};

      &.name {
        font-size: .9em;
        font-weight: 700;
        margin: 0 0 .5em;
      }

      &.tagline {
        font-size: .8em;
        margin: 0 0 .1em;
      }

      &.version {
        font-size: .7em;
        color: ${({ theme: { colors: { lightBlackGreen } } }) => lightBlackGreen};
        font-weight: 700;
      }
    }
  }
`;