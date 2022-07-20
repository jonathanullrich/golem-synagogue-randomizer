import { useState } from 'react'

import Synagogue from './Synagogue';

function App() {

  const [playerCount, setPlayerCount] = useState(0);
  const [counter, setCounter] = useState<number>(0);

  switch (playerCount) {
    case 2:
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <Synagogue playerCount={2} counter={counter} setCounter={setCounter} />
        </>
      )
    case 3:
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <Synagogue playerCount={3} counter={counter} setCounter={setCounter}/>
        </>
      )
    case 4:
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <Synagogue playerCount={4} counter={counter} setCounter={setCounter}/>
        </>
      )
    default: 
      return (
        <>
          <h1>Golem Synagogue Randomizer</h1>
          <div className='button-container'>
            <button onClick={ () => setPlayerCount(2) }>2 Player</button>
            <button onClick={ () => setPlayerCount(3) }>3 Player</button>
            <button onClick={ () => setPlayerCount(4) }>4 Player</button>
          </div>
        </>
      )
    }
}

export default App;
