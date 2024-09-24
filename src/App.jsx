import { useState, useEffect } from 'react'
import GameContext from './Context'
import Logo from './assets/logo.svg'
// import GameStart from './GameStart'
import Game from './Game'
import { boardArray } from './data/boardArray'

export default function App() {

  const [ gameCpu, setGameCpu ] = useState(false)
  const [ gamePlayer, setGamePlayer ] = useState(false)
  const [ playerX, setPlayerX ] = useState(true)
  const [ isXTurn, setIsXTurn ] = useState(true)
  const [ board, setBoard ] = useState(boardArray)

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

  function onTurnChange() {
    setIsXTurn( prevTurn => !prevTurn)
    console.log(`is x turn: ${isXTurn}`)
  }

  function onPlayerMove(tileId) {
    setBoard(prevBoard => prevBoard.map(tile => 
      tile.id === tileId ? {...tile, isHeld: true, content: isXTurn ? 'X' : 'O'} : tile
    ))
    onTurnChange()
  }

  function onGameReset() {
    setIsXTurn(true)
    setBoard(prevBoard => prevBoard.map( tile => ({
      ...tile, isHeld: false, content: ''
    })))
  }

  return (
    <GameContext.Provider 
    value={{ 
      onGameCpuChange, 
      onGamePlayerChange, 
      onPlayerChange,
      onTurnChange, isXTurn,
      onPlayerMove,
      board, setBoard,
      onGameReset
    }}>
      <img src={Logo} alt="Tic Tac Toe logo"/>
      {/* <GameStart /> */}
      <Game />
    </GameContext.Provider>
  )
}