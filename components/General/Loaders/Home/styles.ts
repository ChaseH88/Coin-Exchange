import styled from 'styled-components';
import { gradient } from 'utilities/styles/helpers';

export const HomeLoaderStyle = styled.div`

  background: ${({ theme: { colors: { blackGreen } } }) => gradient({ color: blackGreen, intensity: 1 })};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    text-align: center;

    h1 {
      font-size: 1.4em
    }
  }

`