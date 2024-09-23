import { useContext } from 'react'
import GameContext from '../Context'
import { boardArray } from '../data/boardArray'

export default function Board() {

    const { onTurnChange } = useContext(GameContext)

    function handleTurnChange() {
        onTurnChange()
    }

    const boardTiles = boardArray.map( tile => (
        <button 
        className='game-tile' 
        key={`tile-${tile.id}`}
        onClick={handleTurnChange}>
            {tile.tile}
        </button>
    ))

    return (
        <section id="game-board">
            {boardTiles}
        </section>
    )
}