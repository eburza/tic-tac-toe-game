import { useCallback, useContext, useEffect, useMemo } from 'react'
import GameContext from '../Context'
import Tile from './Tile'

export default function Board() {

    const { state, onMakeMove, onMakeCpuMove } = useContext(GameContext)

    useEffect( () => {
        const timer = setTimeout(() => {
            onMakeCpuMove()
        }, 500)

        return () => clearTimeout(timer)
    }, [state.gameCpu, state.gameWinner, state.playerX, state.isXTurn, state.board, state.gameOn])

    const handleChange = useCallback((tileId) => {
        if( !state.gameWinner ) {
            onMakeMove(tileId)
        }
    }, [state.board, onMakeMove, state.gameWinner])

    const boardTiles = useMemo( () => {
        return(
            state.board.map( tileEl => (
                <Tile 
                key={`tile-${tileEl.id}`}
                id={`tile-${tileEl.id}`}
                isHeld={tileEl.isHeld}
                handleClick={() => handleChange(tileEl.id)}
                tileContent={tileEl.content || ''}
                />
            ))
        )

    }, [state.board, handleChange, state.gameOn])

    return (
        <section id="game-board">
            {boardTiles}
        </section>
    )
}