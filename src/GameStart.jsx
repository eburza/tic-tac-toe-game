import { useContext } from 'react'
import GameContext from './Context'
import PickPlayer from './components/PickPlayer'
import Button from './components/Button'

export default function GameStart() {

    const {onStartGame} = useContext(GameContext)

    const handleGameCpuStart = () => {
        onStartGame(true)
    }

    const handleGamePlayerStart = () => {
        onStartGame(false)
    }

    return (
        <section data-testid='game-start' id='game-start'>
            <PickPlayer />
            <div id='start-game-btn'>
                <Button 
                    buttonText="New Game (vs CPU)"
                    buttonClass="new-game-button"
                    buttonId="button-start-cpu"
                    handleClick={handleGameCpuStart}
                />
                <Button 
                    buttonText="New Game (vs player)"
                    buttonClass="new-game-button"
                    buttonId="button-start-player"
                    handleClick={handleGamePlayerStart}
                />
            </div>
        </section>
    )
}