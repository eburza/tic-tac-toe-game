import { useContext } from 'react'
import GameContext from './Context'
import PickPlayer from './components/PickPlayer'
import Button from './components/Button'

export default function GameStart() {

    const { onGameCpuChange, onGamePlayerChange} = useContext(GameContext)

    function handleGameCpuStart() {
        onGameCpuChange(true)
    }

    function handleGamePlayerStart() {
        onGamePlayerChange(true)
    }

    return (
        <>
            <PickPlayer />
            <Button 
                buttonText="New Game (vs CPU)"
                buttonClass="new-game-button button-cpu"
                buttonId="button-start-cpu"
                handleClick={handleGameCpuStart}
            />
            <Button 
                buttonText="New Game (vs player)"
                buttonClass="new-game-button button-player"
                buttonId="button-start-player"
                handleClick={handleGamePlayerStart}
            />
        </>
    )
}