import ResultElement from './ResultElement'
import { useCallback, useContext } from 'react'
import GameContext from '../Context'

export default function GameResults() {

    const { state } = useContext(GameContext)

    const checkXPlayer = useCallback( () => {
        let playerXcopy = ''
        if (state.gameCpu) {
            if (state.playerX) {
                playerXcopy = '(YOU)'
            } else if (!state.playerX) {
                playerXcopy = '(CPU)'
            }
            return playerXcopy
        }
        if(!state.gameCpu) {
            if (state.playerX) {
                playerXcopy = '(P1)'
            } else if (!state.playerX) {
                playerXcopy = '(P2)'
            }
            return playerXcopy
        }
    }, [ state.gameCpu, state.playerX])

    const checkOPlayer = useCallback( () => {
        let playerOcopy =''
        if(state.gameCpu) {
            if (state.playerX) {
                playerOcopy = '(CPU)'
            } else if (!state.playerX) {
                playerOcopy = '(YOU)'
            }
            return playerOcopy
        }
        if (!state.gameCpu) {
            if (state.playerX) {
                playerOcopy = '(P2)'
            } else if (!state.playerX) {
                playerOcopy = '(P1)'
            }
            return playerOcopy
        }
    }, [ state.gameCpu, state.playerX])

    return(
        <>
            <ResultElement 
                text='X'
                player={checkXPlayer()}
                counter={state.playerXScore}
            />
            <ResultElement 
                text='TIES'
                counter={state.tiesScore}
            />
            <ResultElement 
                text='O'
                player={checkOPlayer()}
                counter={state.playerOScore}
            />
        </>
    )
}