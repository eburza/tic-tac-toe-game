import { useCallback, useContext } from 'react'
import GameContext from '../Context'
import ModalElement from './ModalElement'
import { PLAYER_X, PLAYER_O, TIE, } from '../states/gameConstants'

export default function Modal(props) {

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

    if (!state.modalState) {
        return null;
    }

    return (
        <div id='modal' style={state.modalState ? {display:'block'} : {}} data-testid={props['data-testid']}>
            {state.gameWinner === PLAYER_X || state.gameWinner === PLAYER_O|| state.gameWinner === TIE ? 
                 <ModalElement 
                    subHeadText={state.playerX && state.gameWinner === PLAYER_X ? 'You won!' : state.gameWinner === TIE ? '' : 'OH NO, YOU LOST…' }
                    headText={state.gameWinner === PLAYER_X || state.gameWinner === PLAYER_O ? `takes the round` : state.gameWinner === TIE ? `Round tied` : ''}
                    headTextId={state.gameWinner === PLAYER_X ? 'modal-head-x' : state.gameWinner === PLAYER_O ? 'modal-head-o' : ''}
                    buttonOneId='quit-game-button'
                    buttonOneClassName='modal-btn button-silver'
                    handleButtonOneClick={handleQuitGame}
                    buttonOneText='Quit'
                    buttonTwoId='next-round-button'
                    buttonTwoClassName='modal-btn button-yellow'
                    handleButtonTwoClick={handleNewRound}
                    buttonTwoText='Next round'
                    data-testid='modal'
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
                    data-testid='modal'
                />}
        </div>
    )
}
