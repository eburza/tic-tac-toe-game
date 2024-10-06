import { useMemo } from 'react'
import GameContext from './Context'
import useGameState from './states/useGameState'
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
      <section id='game' data-testid='app-game'>
        {!gameState.state.gameOn && <img src={Logo} alt="Tic Tac Toe logo"/>}
        {!gameState.state.gameOn && <GameStart />}
        {gameState.state.gameOn && <Game data-testid='game-on'/>}
        {gameState.state.modalState && <Modal data-testid='game-modal'/>}
      </section>
    </GameContext.Provider>
  )
}