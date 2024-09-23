import { useContext } from 'react'
import GameContext from '../Context'
import playerX from '../assets/icon-x.svg'
import playerO from '../assets/icon-o.svg'

export default function PlayerTurn() {

    const { isXTurn } = useContext(GameContext)
    return(
    <div> 
        {
        isXTurn ? 
        <img src={playerX}/> : 
        <img src={playerO}/>
        }
    </div>
    )
}