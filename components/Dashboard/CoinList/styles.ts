import styled from 'styled-components';
import { darkenColor } from 'utilities/styles/helpers';

export const CoinListStyle = styled.div`

  max-width: 50%;
  background: ${({ theme: { colors: { darkBlackGreen2 } } }) => darkenColor(darkBlackGreen2, 0.075)};
  padding: ${({ theme: { padding: { content } } }) => content}em;
  border-radius: 1em;

  display: block;

  .row {
    display: flex;
    border-bottom: 1px solid ${({ theme: { colors: { lightBlackGreen } } }) => lightBlackGreen};
    padding: ${({ theme: { padding: { content } } }) => content}em;

    &.headers {
      font-size: 1.2em;
      padding: 0 ${({ theme: { padding: { content } } }) => content}em;
    }

    &.body > div {
      display: flex;
      align-items: center;
    }

    .name {
      flex: 1 1 40%;

      .text {
        margin: 0 0 0 .75em;

        span {
          display: block;
          &:last-child {
            font-size: .8em;
            color: ${({ theme: { colors: { lightBlackGreen } } }) => lightBlackGreen};
          }
        }
      }
    }
    .balance {
      flex: 1 1 40%;
    }
    .price {
      flex: 1 1 20%;
    }
  }

`;
