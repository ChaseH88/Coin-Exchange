import { FC } from 'react';

// Components
import { CoinList } from 'components/Dashboard/CoinList';
import { Input } from 'components/General/Input';

const Home: FC = () => {

  return (
    <div>
      <CoinList />
      <Input
        placeholder='Search'
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
    </div>
  )
}

export default Home;
