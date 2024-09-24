import { useState, useCallback } from 'react'
import GameContext from './Context'
import Logo from './assets/logo.svg'
// import GameStart from './GameStart'
import Game from './Game'
import { boardArray } from './data/boardArray'
import { winPattern } from './data/winPattern'

export default function App() {

  const [ gameCpu, setGameCpu ] = useState(false)
  const [ gamePlayer, setGamePlayer ] = useState(false)
  const [ playerX, setPlayerX ] = useState(true)
  const [ isXTurn, setIsXTurn ] = useState(true)
  const [ board, setBoard ] = useState(boardArray)

  const onGameCpuChange = useCallback((gameStatus) => {
    setGameCpu(gameStatus)
    console.log(`game cpu: ${gameCpu}`)
  }, [])

  const onGamePlayerChange = useCallback((gameStatus) => {
    setGamePlayer(gameStatus)
    console.log(`game player: ${gamePlayer}`)
  }, [])

  const onPlayerChange = useCallback((playerStatus) => {
    setPlayerX(playerStatus)
    console.log(`is it player x: ${playerX}`)
  }, [])

  const onTurnChange = useCallback(() => {
    setIsXTurn((prevTurn) => {
      const newTurn = !prevTurn
      console.log(`is x turn: ${newTurn}`)
      return newTurn
    })
  }, [])

  const onPlayerMove = useCallback((tileId) => {
    setBoard(prevBoard => prevBoard.map(tile => 
      tile.id === tileId ? {...tile, isHeld: true, content: isXTurn ? 'X' : 'O'} : tile
    ))
    onTurnChange()
  }, [isXTurn, onTurnChange])

  const onGameReset = useCallback(() => {
    setIsXTurn(true)
    setBoard(prevBoard => prevBoard.map( tile => ({
      ...tile, isHeld: false, content: tile.id // content: ''
    })))
  }, [])

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