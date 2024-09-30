import { useContext } from 'react'
import GameContext from '../Context'
import Tile from './Tile'

export default function Board() {

    const { state, onMakeMove } = useContext(GameContext)

    function handleChange(tileId) {
        onMakeMove(tileId)
      }

    const boardTiles = state.board.map( tileEl => (
        <Tile 
            key={`tile-${tileEl.id}`}
            id={`tile-${tileEl.id}`}
            isHeld={tileEl.isHeld}
            handleClick={() => handleChange(tileEl.id)}
            tileContent={tileEl.content || ''}
        />
    ))

    return (
        <section id="game-board">
            {boardTiles}
        </section>
    )
}