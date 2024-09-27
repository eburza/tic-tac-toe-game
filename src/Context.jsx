import { createContext } from 'react'

const GameContext = createContext({
    state: {
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
    },
    onGameResetButton: () => {},
    onQuitGame: () => {},
    onNewRound: () => {},
    onCancelRestartGame: () => {},
    onRestartGame: () => {},
    onStartGame: () => {},
    onMakeMove: () => {},
    onGetWinner: () => {},
    onUpdateScore: () => {},
    onCheckGameWinner: () => {},
    onSetPlayer: () => {}
})

export default GameContext