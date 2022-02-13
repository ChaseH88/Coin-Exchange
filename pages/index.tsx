import { FC } from 'react';
import styled from 'styled-components';

const TestStyle = styled.h1`
  color: #000080;
`;

const Home: FC = () => {
  return (
    <div>
      <TestStyle>
        Next App
      </TestStyle>
    </div>
  )
}

export default Home;
