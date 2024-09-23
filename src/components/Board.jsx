import { boardArray } from '../data/boardArray'

export default function Board() {

    const boardTiles = boardArray.map( tile => (
        <button className='game-tile' key={`tile-${tile.id}`}>{tile.tile}</button>
    ))

    return (
        <section id="game-board">
            {boardTiles}
        </section>
    )
}