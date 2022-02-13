import styled from 'styled-components';
import { grid } from 'utilities/styles/helpers';

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
      ${grid(1)};

      #content {
        padding: 1em;
        overflow: hidden scroll;

        &::-webkit-scrollbar{
          width:.9em;
          border-left: 1px solid ${({ theme: { colors: { blackGreen } } }) => blackGreen};
        }
        &::-webkit-scrollbar-thumb{
          border-radius: 2em;
          background-color: ${({ theme: { colors: { blue } } }) => blue};

          &:vertical:hover {
            background-color: ${({ theme: { colors: { lightBlue } } }) => lightBlue};
          }
        }
      }
    }
  }

`;