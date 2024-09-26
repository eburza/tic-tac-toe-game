import { useContext } from 'react'
import GameContext from '../Context'


export default function PickPlayer() {

    const { onPickPlayer, playerXicon, playerOicon } = useContext(GameContext)

    function handlePlayerChangeX() {
        onPickPlayer(true)
    }

    function handlePlayerChangeO() {
        onPickPlayer(false)
    }

    return (
        <>
            <h1>Pick player 1&apos;s mark</h1>
            <div>
                <img src={playerXicon} onClick={handlePlayerChangeX}/>
                <img src={playerOicon} onClick={handlePlayerChangeO}/>
            </div>
            <h2>Remember: X goes first</h2>
        </>
    )
}