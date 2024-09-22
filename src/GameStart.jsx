import Logo from './assets/logo.svg'
import PickPlayer from './components/PickPlayer'

export default function GameStart() {
    return (
        <>
            <img src={Logo} alt="Tic Tac Toe logo"/>
            <PickPlayer />
            <p>Game</p>
        </>
    )
}