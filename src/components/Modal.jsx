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
            {state.playerXScore || state.playerOScore || state.tiesScore ? 
                 <ModalElement 
                    subHeadText={state.playerXScore || state.playerOScore ? `player won` : ''}
                    headText={state.playerXScore ? `x takes the round` : state.playerOScore ? `o takes the round` : `Round tied`}
                    buttonOneId='quit-game-button'
                    buttonOneClassName='button button-gray'
                    handleButtonOneClick={handleQuitGame}
                    buttonOneText='Quit'
                    buttonTwoId='next-round-button'
                    buttonTwoClassName='button button-orange'
                    handleButtonTwoClick={handleNewRound}
                    buttonTwoText='Next round'
                 /> :
                 <ModalElement 
                    headText='Restart game?'
                    buttonOneId='cancel-button'
                    buttonOneClassName='button button-gray'
                    handleButtonOneClick={handleCancelRestartGame}
                    buttonOneText='No, cancel'
                    buttonTwoId='restart-game-button'
                    buttonTwoClassName='button button-orange'
                    handleButtonTwoClick={handleRestartGame}
                    buttonTwoText='Yes, restart'
                />}
        </div>
    )
}
