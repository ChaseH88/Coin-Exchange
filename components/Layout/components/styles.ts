import styled from 'styled-components';

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
    padding: ${headerPadding}em;
  }

`;

export const SideNavStyle = styled.section`

`;