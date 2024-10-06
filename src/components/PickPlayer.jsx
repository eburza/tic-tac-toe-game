import { useContext, useCallback } from 'react'
import GameContext from '../Context'
import { PLAYER_X, PLAYER_O, } from '../states/gameConstants'
import playerXblack from '../assets/icon-x-black.svg'
import playerOblack from '../assets/icon-o-black.svg'

export default function PickPlayer(props) {

    const { state, onSetPlayer } = useContext(GameContext)

    const handlePlayerChange = useCallback((isX) => {
        onSetPlayer(isX)
    }, [onSetPlayer])

    return (
        <div id='pick-player-component' data-testid='pick-player-component' {...props}>
            <p id='pick-player-text-top'>Pick player 1&apos;s mark</p>
            <div id='set-player'>
                <button 
                data-testid='player-X'
                onClick={() => handlePlayerChange(true)} 
                className={`player-button ${state.playerX ? 'selected' : 'inactive'}`}>
                    <img src={playerXblack} alt={PLAYER_X} className={`pick-player-img ${state.playerX ? 'img-selected' : 'img-inactive'}`}/>
                </button>
                <button 
                data-testid='player-O'
                onClick={() => handlePlayerChange(false)} 
                className={`player-button ${!state.playerX ? 'selected' : 'inactive'}`}>
                    <img src={playerOblack} alt={PLAYER_O} className={`pick-player-img ${!state.playerX ? 'img-selected' : 'img-inactive'}`}/>
                </button>
            </div>
            <p id='pick-player-text-bottom'>Remember: X goes first</p>
        </div>
    )
}