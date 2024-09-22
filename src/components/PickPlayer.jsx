import { useContext } from 'react'
import GameContext from '../Context'
import playerX from '../assets/icon-x.svg'
import playerO from '../assets/icon-o.svg'

export default function PickPlayer() {

    const { onPlayerChange } = useContext(GameContext)

    function handlePlayerChangeX() {
        onPlayerChange(true)
    }

    function handlePlayerChangeO() {
        onPlayerChange(false)
    }

    return (
        <>
            <h1>Pick player 1&apos;s mark</h1>
            <div>
                <img src={playerX} onClick={handlePlayerChangeX}/>
                <img src={playerO} onClick={handlePlayerChangeO}/>
            </div>
            <h2>Remember: X goes first</h2>
        </>
    )
}