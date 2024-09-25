import { useContext } from 'react'
import GameContext from '../Context'

export default function ResetGame() {

    const { onGameResetButton } = useContext(GameContext)

    function handleResetButton() {
        onGameResetButton()
    }

    return(
        <button
        onClick={handleResetButton}>
            RESET
        </button>
    )
}