import { useMemo } from 'react'
import GameContext from './Context'
import useGameState from './functions/useGameState'
import { boardArray } from './data/boardArray'
import Logo from './assets/logo.svg'
import GameStart from './GameStart'
import Game from './Game'
import Modal from './components/Modal'

export default function App() {

  const gameState = useGameState(boardArray)

  const contextValue = useMemo(() => ({
    ...gameState,
}), [gameState])

  return (
    <GameContext.Provider 
    value={ contextValue }>
      <img src={Logo} alt="Tic Tac Toe logo"/>
      {!gameState.state.gameOn && <GameStart />}
      {gameState.state.gameOn && <Game />}
      {gameState.state.modalState && <Modal />}
    </GameContext.Provider>
  )
}