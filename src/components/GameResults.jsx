import ResultElement from './ResultElement'
import { useCallback, useContext } from 'react'
import GameContext from '../Context'
import { PLAYER_X, PLAYER_O, TIE, } from '../states/gameConstants'


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
        <section id='results' data-testid='game-results'>
            <ResultElement 
                text={PLAYER_X}
                player={checkXPlayer()}
                counter={state.playerXScore}
                id='result-x'
                data-testid='result-player-x'
            />
            <ResultElement 
                text={TIE}
                counter={state.tiesScore}
                id='result-tie'
                data-testid='result-tie'
            />
            <ResultElement 
                text={PLAYER_O}
                player={checkOPlayer()}
                counter={state.playerOScore}
                id='result-o'
                data-testid='result-player-o'
            />
        </section>
    )
}