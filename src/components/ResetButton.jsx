import { useContext } from 'react'
import GameContext from '../Context'

export default function ResetGame() {

    const { onGameResetButton } = useContext(GameContext)

    const handleResetButton = () => {
        onGameResetButton()
    }

    return(
        <button
        onClick={handleResetButton}>
            RESET
        </button>
    )
}