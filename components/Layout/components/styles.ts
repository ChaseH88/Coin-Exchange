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

  & .breadcrumbs {
    background: ${({ theme: { colors: { darkBlackGreen2 } } }) => darkBlackGreen2};
    padding: ${headerPadding}em;
  }

`;

export const SideNavStyle = styled.section`

`;