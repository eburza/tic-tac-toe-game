import { useContext } from 'react'
import GameContext from '../Context'
import restartButtonImg from '../assets/icon-restart.svg'

export default function ResetGame() {

    const { onGameResetButton } = useContext(GameContext)

    const handleResetButton = () => {
        onGameResetButton()
    }

    return(
        <button id='restart-button'
        data-testid='restart-button'
        onClick={handleResetButton}>
            <img src={restartButtonImg}/>
        </button>
    )
}