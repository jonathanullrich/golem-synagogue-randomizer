import { useState } from 'react'

import Synagogue from './Synagogue';

function App() {

  const [playerCount, setPlayerCount] = useState(0);

  switch (playerCount) {
    case 2:
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <Synagogue playerCount={2} />
        </>
      )
    case 3:
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <Synagogue playerCount={3} />
        </>
      )
    case 4:
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <Synagogue playerCount={4} />
        </>
      )
    default: 
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <button onClick={ () => setPlayerCount(2) }>2 Player</button>
          <button onClick={ () => setPlayerCount(3) }>3 Player</button>
          <button onClick={ () => setPlayerCount(4) }>4 Player</button>
        </>
      )
    }
}

export default App;
