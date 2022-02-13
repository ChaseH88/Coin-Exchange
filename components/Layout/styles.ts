import styled from 'styled-components';

export const LayoutStyle = styled.div`

  height: 100vh;

  & > .container {
      display: flex;
      height: 100%;
      overflow: hidden;

    & > .left {
      background: ${({ theme: { colors: { blackGreen } } }) => blackGreen};
      flex: 0 0 20%;
      padding: 1em;
    }

    & > .right {
      background: ${({ theme: { colors: { darkBlackGreen } } }) => darkBlackGreen};
      flex: 1 1 80%;

      #content {
        padding: 1em;
      }
    }
  }

`;