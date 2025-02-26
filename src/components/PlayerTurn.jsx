import { useContext } from 'react'
import GameContext from '../Context'
import playerXBlack from '../assets/icon-x-black.svg'
import playerOBlack from '../assets/icon-o-black.svg'
import { PLAYER_X, PLAYER_O } from '../states/gameConstants'

export default function PlayerTurn() {

    const { state } = useContext(GameContext)
    
    return(
    <div id='player-turn' data-testid='player-turn'> 
        {
        state.isXTurn ? 
        <img src={playerXBlack} alt={PLAYER_X}/> : 
        <img src={playerOBlack} alt={PLAYER_O}/>
        }
        <p>turn</p>
    </div>
    )
}