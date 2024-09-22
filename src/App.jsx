import { useState, useEffect } from 'react'
import GameContext from './Context'
import GameStart from './GameStart'

export default function App() {

  const [ gameCpu, setGameCpu ] = useState(false)
  const [ gamePlayer, setGamePlayer ] = useState(false)
  const [ playerX, setPlayerX ] = useState(true)

  useEffect( () => {
    console.log(playerX)
  }, [playerX])


  function onGameCpuChange(gameStatus) {
    setGameCpu(gameStatus)
  }

  function onGamePlayerChange(gameStatus) {
    setGamePlayer(gameStatus)
  }

  function onPlayerChange(playerStatus) {
    setPlayerX(playerStatus)
  }

  return (
    <GameContext.Provider 
    value={{ 
      gameCpu, onGameCpuChange, 
      gamePlayer, onGamePlayerChange, 
      onPlayerChange
    }}>
      <GameStart />
    </GameContext.Provider>
  )
}