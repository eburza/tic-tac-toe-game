import Board from './components/Board'
import PlayerTurn from './components/PlayerTurn'
import ResetGame from './components/ResetGame'
import GameResults from './components/GameResults'

export default function Game() {

    return (
        <>
            <PlayerTurn />
            <ResetGame />
            <Board />
            <GameResults />
        </>
    )
}