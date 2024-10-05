import { useContext } from 'react'
import GameContext from '../Context'
import playerXblack from '../assets/icon-x-black.svg'
import playerOblack from '../assets/icon-o-black.svg'
import { PLAYER_X, PLAYER_O } from '../states/gameConstants'

export default function PlayerTurn() {

    const { state } = useContext(GameContext)
    
    return(
    <div id='player-turn' data-testid='player-turn'> 
        {
        state.isXTurn ? 
        <img src={playerXblack} alt={PLAYER_X}/> : 
        <img src={playerOblack} alt={PLAYER_O}/>
        }
        <p>turn</p>
    </div>
    )
}