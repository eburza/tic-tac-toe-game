import { useState, useEffect } from 'react'
import GameContext from './Context'
import Logo from './assets/logo.svg'
// import GameStart from './GameStart'
import Game from './Game'

export default function App() {

  const [ gameCpu, setGameCpu ] = useState(false)
  const [ gamePlayer, setGamePlayer ] = useState(false)
  const [ playerX, setPlayerX ] = useState(true)
  // const [ board, setBoard ] = useState(Array(9).fill(null))

  useEffect( () => {
    console.log(playerX)
  }, [playerX])

  function onGameCpuChange(gameStatus) {
    setGameCpu(gameStatus)
    console.log(`game cpu ${gameCpu}`)
  }

  function onGamePlayerChange(gameStatus) {
    setGamePlayer(gameStatus)
    console.log(`game player ${gamePlayer}`)
  }

  function onPlayerChange(playerStatus) {
    setPlayerX(playerStatus)
  }

  return (
    <GameContext.Provider 
    value={{ 
      onGameCpuChange, 
      onGamePlayerChange, 
      onPlayerChange
    }}>
      <img src={Logo} alt="Tic Tac Toe logo"/>
      {/* <GameStart /> */}
      <Game />
    </GameContext.Provider>
  )
}