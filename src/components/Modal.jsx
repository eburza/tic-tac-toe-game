import { useContext } from 'react'
import GameContext from '../Context'
import ModalElement from './ModalElement'

export default function Modal() {

    const { playerXScore, playerOScore, modalState, checkGameState } = useContext(GameContext)

    function onClick() {
        console.log('clicked')
    }

    return (
        <div id='modal' style={modalState ? {display:'block'} : {}}>
            {checkGameState ? 
                 <ModalElement 
                    subHeadText={playerXScore || playerOScore ? `player won` : ''}
                    headText={playerXScore ? `x takes the round` : playerOScore ? `o takes the round` : `Round tied`}
                    buttonOneId='quit-game-button'
                    buttonOneClassName='button button-gray'
                    handleButtonOneClick={onClick}
                    buttonOneText='Quit'
                    buttonTwoId='next-round-button'
                    buttonTwoClassName='button button-orange'
                    handleButtonTwoClick={onClick}
                    buttonTwoText='Next round'
                 /> :
                 <ModalElement 
                    headText='Restart game?'
                    buttonOneId='cancel-button'
                    buttonOneClassName='button button-gray'
                    handleButtonOneClick={onClick}
                    buttonOneText='No, cancel'
                    buttonTwoId='restart-game-button'
                    buttonTwoClassName='button button-orange'
                    handleButtonTwoClick={onClick}
                    buttonTwoText='Yes, restart'
                />}
        </div>
    )
}