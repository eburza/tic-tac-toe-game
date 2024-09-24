import { useContext } from 'react'
import GameContext from '../Context'

export default function ResetGame() {

    const { onGameReset } = useContext(GameContext)

    function handleResetButton() {
        onGameReset()
    }

    return(
        <button
        onClick={handleResetButton}>
            RESET
        </button>
    )
}