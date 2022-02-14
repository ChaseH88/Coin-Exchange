import styled from 'styled-components';
import { lightenColor } from 'utilities/styles/helpers';

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