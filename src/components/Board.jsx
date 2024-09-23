import { useContext } from 'react'
import GameContext from '../Context'
import Tile from './Tile'

export default function Board() {

    const { 
        onPlayerMove, 
        board,
    } = useContext(GameContext)

    function handleChange(id) {
        onPlayerMove(id);
      }

    // function holdTile(id) {
    //     setBoard(prevBoard => prevBoard.map( tile => 
    //       tile.id === id ? 
    //       {...tile, isHeld: !tile.isHeld} : 
    //       tile
    //     ))
    //   }

    const boardTiles = board.map( tileEl => (
        <Tile 
            className='game-tile'
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