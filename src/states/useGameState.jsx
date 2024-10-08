import { useReducer, useCallback } from 'react'
import { winPattern } from '../data/winPattern'
import { PLAYER_X, PLAYER_O, TIE, } from './gameConstants';


const ACTIONS = {
    START_GAME: 'START_GAME',
    QUIT_GAME: 'QUIT_GAME',
    RESTART_GAME: 'RESTART_GAME',
    CANCEL_RESTART: 'CANCEL_RESTART',
    NEW_ROUND: 'NEW_ROUND',
    MAKE_MOVE: 'MAKE_MOVE',
    CPU_MOVE: 'CPU_MOVE',
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
      return TIE
    }
    return null
}

function makeCpuMove(board) {
    const availableTile = board.filter(tile => !tile.isHeld).map(tile => tile.id)
    const randomIndex = Math.floor(Math.random() * availableTile.length)
    return availableTile[randomIndex]

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

        case ACTIONS.MAKE_MOVE: {
            let newBoard = state.board.map(tile => 
                tile.id === action.payload.tileId ?
                { ...tile, isHeld: true, content: state.isXTurn ? PLAYER_X : PLAYER_O} :
                tile
              )
              
              let winner = checkGameWinner(newBoard)
        
              return {
                ...state,
                isXTurn: !state.isXTurn,
                board: newBoard,
                gameWinner: winner,
                modalState: winner ? true : false,
                playerXScore: winner === PLAYER_X ? state.playerXScore + 1 : state.playerXScore,
                playerOScore: winner === PLAYER_O ? state.playerOScore + 1 : state.playerOScore,
                tiesScore: winner === TIE ? state.tiesScore + 1 : state.tiesScore
              }
        }

        case ACTIONS.CPU_MOVE: {
            const cpuMoveId = makeCpuMove(state.board)
            let newBoard = state.board.map(tile => 
                tile.id === cpuMoveId ?
                { ...tile, isHeld: true, content: state.isXTurn ? PLAYER_X : PLAYER_O} :
                tile
            )
            
            let winner = checkGameWinner(newBoard)
            
            return {
                ...state,
                isXTurn: !state.isXTurn,
                board: newBoard,
                gameWinner: winner,
                modalState: winner ? true : false,
                playerXScore: winner === PLAYER_X ? state.playerXScore + 1 : state.playerXScore,
                playerOScore: winner === PLAYER_O ? state.playerOScore + 1 : state.playerOScore,
                tiesScore: winner === TIE ? state.tiesScore + 1 : state.tiesScore
            }
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

      const onMakeCpuMove = useCallback(() => {
        if (state.gameCpu && !state.gameWinner && 
            ((state.playerX && !state.isXTurn) || (!state.playerX && state.isXTurn))) {
            dispatch({ type: ACTIONS.CPU_MOVE })
        }
    }, [state.gameCpu, state.gameWinner, state.playerX, state.isXTurn])

    const onMakeMove = useCallback((tileId) => {
        dispatch({type: ACTIONS.MAKE_MOVE, payload: {tileId}})
    }, [state.gameWinner, state.playerX, state.isXTurn])
 
    return {
        state,
        onGameResetButton,
        onQuitGame,
        onNewRound,
        onCancelRestartGame,
        onRestartGame,
        onStartGame,
        onMakeMove,
        onMakeCpuMove,
        onSetPlayer
      }
}

  

  
