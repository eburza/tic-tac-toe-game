import { useState, useEffect, useCallback } from 'react'
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
  const [ gameState, setGameState ] = useState('')

  const checkGameState = useCallback( () => {
    let checkWinner = ''
    for( let [a, b, c] of winPattern ) {
      if ( board[a].content && board[b].content === board[a].content && board[c].content === board[a].content) {
        checkWinner = `player ${board[a].content} won`
        return checkWinner
      }

      if ( board.every(tile => tile.isHeld) ) {
        checkWinner = `it's a draw`
        return checkWinner
      }
    }
    return checkWinner
  }, [board, gameState])

  useEffect( () => {
    const newGameState = checkGameState()
    
    if (newGameState !== gameState) {
      setGameState(newGameState)
    }

    console.log(gameState)
    
  }, [ board, gameState ])

  function onGameCpuChange(gameStatus){
    setGameCpu(gameStatus)
    console.log(`game cpu: ${gameCpu}`)
  }

  function onGamePlayerChange(gameStatus) {
    setGamePlayer(gameStatus)
    console.log(`game player: ${gamePlayer}`)
  }


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
  }, [isXTurn, onTurnChange, board])

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
      onGameReset,
    }}>
      <img src={Logo} alt="Tic Tac Toe logo"/>
      {/* <GameStart /> */}
      <Game />
    </GameContext.Provider>
  )
}