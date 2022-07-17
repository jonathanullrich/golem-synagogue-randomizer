import { useState } from 'react';
import Board from './Board';

function App() {

  return (
    <>
      <h1>Golem Synagoge Randomizer</h1>
      <Board playerCount={2}/>
    </>
  )
}

export default App;
