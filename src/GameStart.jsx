import { useContext } from 'react'
import GameContext from './Context'
import PickPlayer from './components/PickPlayer'
import Button from './components/Button'

export default function GameStart() {

    const { onGameCpuChange, onGamePlayerChange, onGameStartChange} = useContext(GameContext)

    function handleGameStartChange() {
        onGameStartChange(true)
    }

    return (
        <>
            <PickPlayer />
            <Button 
                onGameStartChange={onGameCpuChange}
                buttonText="New Game (vs CPU)"
                buttonClass="new-game-button button-cpu"
                buttonId="button-start-cpu"
                handleClick={handleGameStartChange}
            />
            <Button 
                onGameStartChange={onGamePlayerChange}
                buttonText="New Game (vs player)"
                buttonClass="new-game-button button-player"
                buttonId="button-start-player"
                handleClick={handleGameStartChange}
            />
        </>
    )
}