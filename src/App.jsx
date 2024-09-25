import { useState, useEffect, useCallback } from 'react'
import GameContext from './Context'
import { boardArray } from './data/boardArray'
import { winPattern } from './data/winPattern'
import Logo from './assets/logo.svg'
import GameStart from './GameStart'
import Game from './Game'
import Modal from './components/Modal'

export default function App() {

  const [ gameCpu, setGameCpu ] = useState(false)
  const [ gamePlayer, setGamePlayer ] = useState(false)
  const [ playerX, setPlayerX ] = useState(true)
  const [ gameOn, setGameOn ] = useState(false)
  const [ isXTurn, setIsXTurn ] = useState(true)
  const [ board, setBoard ] = useState(boardArray)
  const [ gameWinner, setGameWinner ] = useState('')
  const [ gameState, setGameState ] = useState('')
  const [ playerXScore, setPlayerXScore ] = useState(0)
  const [ playerOScore, setPlayerOScore ] = useState(0)
  const [ tiesScore, setTiesScore ] = useState(0)
  const [ modalState, setModalState ] = useState(false)

  //on game start
  const onPlayerChange = useCallback((state) => {
    setPlayerX(state)
  }, [])

  function onGameCpuChange(gameStatus){
    setGameCpu(gameStatus)
    setGamePlayer(false)
  }

  function onGamePlayerChange(gameStatus) {
    setGamePlayer(gameStatus)
    setGameCpu(false)
  }

  useEffect(() => {
    console.log(`Player X state updated: ${playerX}`)
  }, [playerX])

  useEffect(() => {
    setGameOn( prevGameOnState => !prevGameOnState)
    console.log(`Game started. game player:${gamePlayer}, game cpu ${gameCpu}`)
  }, [gamePlayer, gameCpu])

  //reset game
  // TO FIX: update game state and modal state. Now its not working correctly 
  const onGameResetButton = useCallback(() => {
    setModalState(true)
  }, [])

  const onQuitGame = useCallback( () => {
    setGameState('quit game')
  }, [])

  const onNewRound = useCallback( () => {
    setGameState('new round')
  }, [])
  
  const onCancelRestartGame = useCallback( () => {
    setGameState('cancel restart')
  }, [])
  
  const onRestartGame = useCallback( () => {
    setGameState('restart game')
  }, [])
  
  useEffect( () => {
    if (gameState === 'quit game') {
      setModalState(false)
      setGameOn(false)
      setIsXTurn(true)
      setPlayerXScore(0)
      setPlayerOScore(0)
      setTiesScore(0)
      setGameWinner('')
      setBoard(prevBoard => prevBoard.map( tile => ({
        ...tile, isHeld: false, content: ''
      })))
    } else if (gameState === 'new round') {
        setModalState(false)
        setGameWinner('')
        setBoard(prevBoard => prevBoard.map( tile => ({
          ...tile, isHeld: false, content: ''
        })))
    } else if (gameState === 'cancel restart') {
        setModalState(false)
    } else if (gameState === 'restart game') {
        setModalState(false)
        setBoard(prevBoard => prevBoard.map( tile => ({
          ...tile, isHeld: false, content: ''
        })))
    }
  }, [onQuitGame, onNewRound, onCancelRestartGame, onRestartGame, gameState])

  //on current game
  const checkGameWinner = useCallback( () => {
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
  }, [board, gameWinner])

  const checkScore = useCallback( () => {
    const score = checkGameWinner()

    if (score === `player X won`) {
      setModalState(true)
      setPlayerXScore( prevPlayerXScore => prevPlayerXScore + 1)
    } else if (score === `player O won`) {
      setModalState(true)
      setPlayerOScore( prevPlayerOScore => prevPlayerOScore + 1)
    } else if (score === `it's a draw`){
      setModalState(true)
      setTiesScore( prevTiesScore => prevTiesScore + 1)
    }

  }, [board, gameWinner, modalState])

  useEffect( () => {
    const newGameState = checkGameWinner()
    
    if (newGameState !== gameWinner) {
      setGameWinner(newGameState)
      checkScore()
    }
    console.log(gameWinner)
  }, [ board, gameWinner, checkScore ])

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

  return (
    <GameContext.Provider 
    value={{ 
      onGameCpuChange, 
      onGamePlayerChange, 
      onPlayerChange,
      onTurnChange, isXTurn,
      onPlayerMove,
      setBoard, board,
      onGameResetButton,
      playerXScore, playerOScore, tiesScore,
      onQuitGame, onNewRound, onCancelRestartGame, onRestartGame
    }}>
      <img src={Logo} alt="Tic Tac Toe logo"/>
      {gameOn ? '' : <GameStart />}
      {gameOn ? <Game /> : ''}
      {modalState ? <Modal /> : ''}
    </GameContext.Provider>
  )
}