const mockGameContext = {
    state: {
      board: Array(9).fill().map((_, index) => ({
        id: index + 1,
        isHeld: false,
        content: ''
      })),
      gameOn: true,
      gameCpu: false,
      gamePlayer: false,
      modalState: false,
      playerX: true,
      isXTurn: true,
      gameWinner: '',
      playerXScore: 0,
      playerOScore: 0,
      tiesScore: 0,
    },
    onMakeMove: jest.fn(),
    onGameResetButton: jest.fn(),
    onQuitGame: jest.fn(),
    onNewRound: jest.fn(),
    onCancelRestartGame: jest.fn(),
    onRestartGame: jest.fn(),
    onStartGame: jest.fn(),
    onSetPlayer: jest.fn(),
    onToggleModal: jest.fn(),
    onMakeCpuMove: jest.fn()

  }

  export { mockGameContext }
  

