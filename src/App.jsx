import { useState } from 'react'
import GameContext from './Context'
import GameStart from './GameStart'

export default function App() {

  const [ gameStart, setGameStart ] = useState(false)

  function handleGameStartChange(isOn) {
    setGameStart(isOn)
  }

  return (
    <GameContext.Provider value={ {gameStart, handleGameStartChange} }>
      <GameStart
      />
    </GameContext.Provider>
  )
}