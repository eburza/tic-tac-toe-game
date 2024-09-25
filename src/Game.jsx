import Board from './components/Board'
import PlayerTurn from './components/PlayerTurn'
import ResetButton from './components/ResetButton'
import GameResults from './components/GameResults'

export default function Game() {

    return (
        <>
            <PlayerTurn />
            <ResetButton />
            <Board />
            <GameResults />
        </>
    )
}