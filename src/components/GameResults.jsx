import ResultElement from './ResultElement'
import { useContext } from 'react'
import GameContext from '../Context'

export default function GameResults() {

    const { playerXScore, playerOScore, tiesScore } = useContext(GameContext)

    return(
        <>
            <ResultElement 
                text='X'
                player='(P1)'
                counter={playerXScore}
            />
            <ResultElement 
                text='TIES'
                counter={tiesScore}
            />
            <ResultElement 
                text='O'
                player='(P2)'
                counter={playerOScore}
            />
        </>
    )
}