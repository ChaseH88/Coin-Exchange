import styled from 'styled-components';

export const CoinDropdownStyles = styled.div`

  flex: 1 1 auto;

  .wrapper {
    z-index: 999;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

    .selected-item {
      padding: .4em .75em;
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 43px;

      span.title {
        margin: 0 0 0 0.5em;
      }
    }
  }

  .arrow {
    padding: 0 1.25em 0 0;
  }

  .items {
    z-index: 1000;
    position: absolute;
    top: 100%;
    background: ${({ theme }) => theme.colors.blackGreen};
    border-radius: 0 0 .5em .5em;
    border: 1px solid ${({ theme }) => theme.colors.lightBlackGreen};
    left: 0;
    right: 0;

    & > div {
      display: flex;
      align-items: center;
      padding: .25em .5em;

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlackGreen};
      }

      span {
        display: block;
        font-size: .9em;

        &:first-child {
          flex: 0 0 30px;
          width: 30px !important;
          margin: 0 .75em 0 0 !important;

          span {

          }
        }
        &:last-child {
          flex: 1 1 auto
        }
      }
    }
  }

`;
