import { useContext, useCallback } from 'react'
import GameContext from '../Context'
import playerXicon from '../assets/icon-x.svg'
import playerOicon from '../assets/icon-o.svg'

export default function PickPlayer() {

    const { state, onSetPlayer } = useContext(GameContext)

    const handlePlayerChange = useCallback((isX) => {
        console.log('Player changed to:', isX ? 'X' : 'O')
        onSetPlayer(isX)
    }, [onSetPlayer])

    return (
        <>
            <h1>Pick player 1&apos;s mark</h1>
            <div id='set-player'>
                <button 
                onClick={() => handlePlayerChange(true)} 
                className={`player-button ${state.playerX ? 'selected' : ''}`}>
                    <img src={playerXicon} alt="X" />
                </button>
                <button 
                onClick={() => handlePlayerChange(false)} 
                className={`player-button ${!state.playerX ? 'selected' : ''}`}>
                    <img src={playerOicon} alt="O" />
                </button>
            </div>
            <h2>Remember: X goes first</h2>
        </>
    )
}