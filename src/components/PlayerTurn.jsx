import { useContext } from 'react'
import GameContext from '../Context'
import playerXblack from '../assets/icon-x-black.svg'
import playerOblack from '../assets/icon-o-black.svg'

export default function PlayerTurn() {

    const { state } = useContext(GameContext)
    
    return(
    <div id='player-turn'> 
        {
        state.isXTurn ? 
        <img src={playerXblack}/> : 
        <img src={playerOblack}/>
        }
        <p>turn</p>
    </div>
    )
}