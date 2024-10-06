import Board from './components/Board'
import PlayerTurn from './components/PlayerTurn'
import ResetButton from './components/ResetButton'
import GameResults from './components/GameResults'
import Logo from './assets/logo.svg'

export default function Game(props) {

    return (
        <section id='game-on' data-testid='game-on'>
            <div id='game-header'>
                <img src={Logo} alt="Tic Tac Toe"/>
                <PlayerTurn />
                <ResetButton />
            </div>
            <Board />
            <GameResults />
        </section>
    )
}