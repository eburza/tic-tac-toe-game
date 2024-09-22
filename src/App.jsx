import { useState } from 'react'
import GameContext from './Context'
import GameStart from './GameStart'

export default function App() {

  const [ gameCpu, setGameCpu ] = useState(false)
  const [ gamePlayer, setGamePlayer ] = useState(false)


  function onGameCpuChange(gameStatus) {
    setGameCpu(gameStatus)
  }

  function onGamePlayerChange(gameStatus) {
    setGamePlayer(gameStatus)
  }

  return (
    <GameContext.Provider 
    value={{ gameCpu, onGameCpuChange, gamePlayer, onGamePlayerChange }}>
      <GameStart
      />
    </GameContext.Provider>
  )
}