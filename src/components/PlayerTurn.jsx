import { useContext } from 'react'
import GameContext from '../Context'
import playerXicon from '../assets/icon-x.svg'
import playerOicon from '../assets/icon-o.svg'

export default function PlayerTurn() {

    const { state } = useContext(GameContext)
    
    return(
    <div> 
        {
        state.isXTurn ? 
        <img src={playerXicon}/> : 
        <img src={playerOicon}/>
        }
    </div>
    )
}