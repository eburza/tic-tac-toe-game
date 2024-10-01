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
    SET_PLAYER: 'SET_PLAYER'
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

function checkGameWinner(board) {
    for (let [a, b, c] of winPattern) {
      if (board[a].content && board[a].content === board[b].content && board[a].content === board[c].content) {
        return board[a].content
      }
    }
    if (board.every(tile => tile.isHeld)) {
      return 'TIE'
    }
    return null
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
                isXTurn: state.isXTurn,
                gameWinner: '',
                board: state.board.map(tile => ({ 
                    ...tile, isHeld: false, content: ''
                }))
            }
        case ACTIONS.MAKE_MOVE:
            const newBoard = state.board.map(tile => 
                tile.id === action.payload.tileId ?
                { ...tile, isHeld: true, content: state.isXTurn ? 'X' : "O"} :
                tile
            )
            const winner = checkGameWinner(newBoard)
            return {
                ...state,
                isXTurn: !state.isXTurn,
                board: newBoard,
                gameWinner: winner,
                modalState: winner ? true : false,
                playerXScore: winner === 'X' ? state.playerXScore + 1 : state.playerXScore,
                playerOScore: winner === 'O' ? state.playerOScore + 1 : state.playerOScore,
                tiesScore: winner === 'TIE' ? state.tiesScore + 1 : state.tiesScore
            }

        case ACTIONS.TOGGLE_MODAL:
            return {
                ...state,
                modalState: !state.modalState
            }

        case ACTIONS.SET_PLAYER:
            return {
                ...state,
                playerX: action.payload.playerX
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
    }, [])

    const onSetPlayer = useCallback( (isX) => {
        dispatch({ type: ACTIONS.SET_PLAYER, payload: { playerX: isX } })
      }, [dispatch])

    const onMakeMove = useCallback( (tileId) => {
        dispatch({ type: ACTIONS.MAKE_MOVE, payload: {tileId}})
    }, [])
 
    return {
        state,
        onGameResetButton,
        onQuitGame,
        onNewRound,
        onCancelRestartGame,
        onRestartGame,
        onStartGame,
        onMakeMove,
        onSetPlayer
      }
}

  

  
