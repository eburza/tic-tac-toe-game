import { useReducer } from "react"

const ACTIONS = {
    START_GAME: 'START_GAME',
    QUIT_GAME: 'QUIT_GAME',
    RESTART_GAME: 'RESTART_GAME',
    CANCEL_RESTART: 'CANCEL_RESTART',
    NEW_ROUND: 'NEW_ROUND',
    MAKE_MOVE: 'MAKE_MOVE',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
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
        case ACTIONS.TOGGLE_MODAL:
            return {
                ...state,
                modalState: !state.modalState
            }
        default:
            return state
    }
}

//TO DO: add dispach funtions
export default function useGameState() {
    const [ state, dispach ] = useReducer(gameReducer, initialState)


}