import { useCallback, useContext } from 'react'
import GameContext from '../Context'
import ModalElement from './ModalElement'

export default function Modal() {

    const { state, onQuitGame, onNewRound, onCancelRestartGame, onRestartGame } = useContext(GameContext)

    const handleQuitGame = useCallback(() => {
        onQuitGame()
    }, [onQuitGame])

    const handleNewRound = useCallback(() => {
        onNewRound()
    }, [onNewRound])

    const handleCancelRestartGame = useCallback(() => {
        onCancelRestartGame()
    }, [onCancelRestartGame])

    const handleRestartGame = useCallback(() => {
        onRestartGame()
    }, [onRestartGame])

    return (
        <div id='modal' style={state.modalState ? {display:'block'} : {}}>
            {state.gameWinner === 'X' || state.gameWinner === 'O' ? 
                 <ModalElement 
                    subHeadText={state.playerX && state.gameWinner === 'X' ? 'You won!' : 'OH NO, YOU LOST…' }
                    headText={state.gameWinner === 'X' || state.gameWinner === 'O' ? `takes the round` : `Round tied`}
                    headTextId={state.gameWinner === 'X' ? 'modal-head-x' : state.gameWinner === 'O' ? 'modal-head-o' : ''}
                    buttonOneId='quit-game-button'
                    buttonOneClassName='modal-btn button-silver'
                    handleButtonOneClick={handleQuitGame}
                    buttonOneText='Quit'
                    buttonTwoId='next-round-button'
                    buttonTwoClassName='modal-btn button-yellow'
                    handleButtonTwoClick={handleNewRound}
                    buttonTwoText='Next round'
                 /> :
                 <ModalElement 
                    headText='Restart game?'
                    headTextId='head-text-restart'
                    buttonOneId='cancel-button'
                    buttonOneClassName='modal-btn button-silver'
                    handleButtonOneClick={handleCancelRestartGame}
                    buttonOneText='No, cancel'
                    buttonTwoId='restart-game-button'
                    buttonTwoClassName='modal-btn button-yellow'
                    handleButtonTwoClick={handleRestartGame}
                    buttonTwoText='Yes, restart'
                />}
        </div>
    )
}
