import {  } from 'react'
import GameContext from './Context'
import useGameState from './functions/useGameState'
import { boardArray } from './data/boardArray'
import Logo from './assets/logo.svg'
import GameStart from './GameStart'
import Game from './Game'
import Modal from './components/Modal'

export default function App() {

  const {
    state,
    onGameResetButton,
    onQuitGame,
    onNewRound,
    onCancelRestartGame,
    onRestartGame,
    onStartGame,
    onMakeMove,
    onGetWinner,
    onUpdateScore,
    onCheckGameWinner
  } = useGameState(boardArray)

  const {
    gameCpu,
    gamePlayer,
    gameOn,
    modalState,
    playerX,
    isXTurn,
    gameWinner,
    playerXScore,
    playerOScore,
    tiesScore,
    board
  } = state

  return (
    <GameContext.Provider 
    value={{ 
      gameCpu,
      gamePlayer,
      gameOn,
      modalState,
      playerX,
      isXTurn,
      gameWinner,
      playerXScore,
      playerOScore,
      tiesScore,
      board,
      onGameResetButton,
      onQuitGame,
      onNewRound,
      onCancelRestartGame,
      onRestartGame,
      onStartGame,
      onMakeMove,
      onGetWinner,
      onUpdateScore,
      onCheckGameWinner
    }}>
      <img src={Logo} alt="Tic Tac Toe logo"/>
      {gameOn ? '' : <GameStart />}
      {gameOn ? <Game /> : ''}
      {modalState ? <Modal /> : ''}
    </GameContext.Provider>
  )
}