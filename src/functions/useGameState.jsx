import { useReducer, useCallback } from "react"
import { winPattern } from "../data/winPattern"

const ACTIONS = {
    START_GAME: 'START_GAME',
    QUIT_GAME: 'QUIT_GAME',
    RESTART_GAME: 'RESTART_GAME',
    CANCEL_RESTART: 'CANCEL_RESTART',
    NEW_ROUND: 'NEW_ROUND',
    MAKE_MOVE: 'MAKE_MOVE',
    GAME_WINNER: 'GAME_WINNER',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
}

const initialState = {
    gameCpu: false,
    gamePlayer: false,
    gameOn: false,
    modalState: false,
    playerX: true,
    isXTurn: true,
    gameWinner: '',
    playerXScore: 0,
    playerOScore: 0,
    tiesScore: 0,
    board: []
}

function gameReducer(state, action) {
    switch(action.type) {
        case ACTIONS.START_GAME:
            return {
                ...state,
                gameOn: true,
                gameCpu: action.payload.isCpu,
                gamePlayer: !action.payload.isCpu
            }
        case ACTIONS.QUIT_GAME:
            return {
                ...initialState,
                board: state.board.map(tile => ({ ...tile, isHeld: false, content: '' }))
            }
        case ACTIONS.RESTART_GAME:
            return {
                ...state,
                modalState: false,
                board: state.board.map(tile => ({ 
                    ...tile, isHeld: false, content: '' 
                }))
            }
        case ACTIONS.CANCEL_RESTART:
            return {
                ...state,
                modalState: false
            }
        case ACTIONS.NEW_ROUND:
            return {
                ...state,
                modalState: false,
                isXTurn: !state.isXTurn,
                gameWinner: '',
                board: state.board.map(tile => ({ 
                    ...tile, isHeld: false, content: ''
                }))
            }
        case ACTIONS.MAKE_MOVE:
            return {
                ...state,
                isXTurn: !state.isXTurn,
                board: state.board.map(tile => 
                    tile.id === action.payload.tileId ?
                    { ...tile, isHeld: true, content: state.isXTurn ? 'X' : "O"} :
                    tile
                )
            }
        case ACTIONS.GAME_WINNER:
            return{
                ...state,
                modalState: true,
                gameWinner: action.payload.winner,
                playerXScore: 0,
                playerOScore: 0,
                tiesScore: 0

            }
        case ACTIONS.TOGGLE_MODAL:
            return {
                ...state,
                modalState: !state.modalState
            }
        default:
            return state
    }
}

export default function useGameState(initialBoard) {
    const [ state, dispatch ] = useReducer(gameReducer, {
        ...initialState,
        board: initialBoard
    })

    const onGameResetButton = useCallback(() => {
        dispatch({ type: ACTIONS.TOGGLE_MODAL });
    }, [])

    const onQuitGame = useCallback( () => {
        dispatch({ type: ACTIONS.QUIT_GAME})
    }, [])

    const onNewRound = useCallback( () => {
        dispatch({ type: ACTIONS.NEW_ROUND})
    }, [])

    const onCancelRestartGame = useCallback( () => {
        dispatch({ type: ACTIONS.CANCEL_RESTART})
    }, [])

    const onRestartGame = useCallback( () => {
        dispatch({ type: ACTIONS.RESTART_GAME})
    }, [])
    
    const onStartGame = useCallback( (isCpu) => {
        dispatch({ type: ACTIONS.START_GAME, payload: {isCpu}})
    })

    const onMakeMove = useCallback( (tileId) => {
        dispatch({ type: ACTIONS.MAKE_MOVE, payload: {tileId}})
    })

    function onCheckGameWinner(board) {
        const pattern = winPattern

        for (let [a, b, c] of pattern) {
            if ( board[a].content && board[b].content === board[a].content && board[c].content === board[a].content) {
              return board[a].content
            }
            if ( board.every(tile => tile.isHeld) ) {
              return 'tie'
            }
        }
    }

    const onGetWinner = useCallback( () => {
        const winner = onCheckGameWinner(state.board)

        if (winner) {
            dispatch({ type: ACTIONS.TOGGLE_MODAL})
            onUpdateScore(winner)
        }
    }, [state.board, onCheckGameWinner])

    const onUpdateScore = useCallback( (winner) => {
        if ( winner === 'x') {
            dispatch({ type: ACTIONS.UPDSTE_SCORE, payload: {playerXScore : state.playerXScore + 1}})
        }
        if ( winner === 'o') {
            dispatch({ type: ACTIONS.UPDSTE_SCORE, payload: {playerOScore : state.playerOScore + 1}})
        }
        if ( winner === 'tie') {
            dispatch({ type: ACTIONS.UPDSTE_SCORE, payload: {tiesScore : state.tiesScore + 1}})
        }
    })

    return {
        state,
        onGameResetButton,
        onQuitGame,
        onNewRound,
        onCancelRestartGame,
        onRestartGame,
        onStartGame,
        onMakeMove,
        onGetWinner,
        onUpdateScore,
        onCheckGameWinner
      }
}

  

  
