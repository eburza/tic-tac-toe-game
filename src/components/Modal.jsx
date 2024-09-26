import { useContext } from 'react'
import GameContext from '../Context'
import ModalElement from './ModalElement'

export default function Modal() {

    const { state, onQuitGame, onNewRound, onCancelRestartGame, onRestartGame } = useContext(GameContext)
    const { playerXScore, playerOScore, tiesScore, modalState } = state

    const handleQuitGame = () => {
        onQuitGame()
    }

    const handleNewRound = () => {
        onNewRound()
    }

    const handleCancelRestartGame = () => {
        onCancelRestartGame()
    }

    const handleRestartGame = () => {
        onRestartGame()
    }

    return (
        <div id='modal' style={modalState ? {display:'block'} : {}}>
            {playerXScore || playerOScore || tiesScore? 
                 <ModalElement 
                    subHeadText={playerXScore || playerOScore ? `player won` : ''}
                    headText={playerXScore ? `x takes the round` : playerOScore ? `o takes the round` : `Round tied`}
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