import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import * as useGameStateModule from '../../states/useGameState';
import App from '../../App'

describe('render App', () => {
    beforeEach(() => {
        jest.spyOn(useGameStateModule, 'default')
        jest.clearAllMocks()
    })

    test('renders correctly', () => {
        const {getByTestId} = render(<App />)
        expect(getByTestId('app-game')).toBeInTheDocument()
    })

    test('renders elements at game start', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                gameOn: false,
                modalState: false
            }
        }

        useGameStateModule.default.mockReturnValue(customMockGameContext)
        const { getByAltText, getByTestId, queryByTestId } = renderWithProvider(<App />, {
            providerProps: customMockGameContext
        })

        const logo = getByAltText('Tic Tac Toe logo')
        const gameStart = getByTestId('game-start')
        const gameOn = queryByTestId('game-on')
        const gameModal = queryByTestId('game-modal')
        expect(logo).toBeInTheDocument()
        expect(gameStart).toBeInTheDocument()
        expect(gameOn).not.toBeInTheDocument()
        expect(gameModal).not.toBeInTheDocument()
    })

    test('renders elements at game on', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                gameOn: true,
                modalState: false
            }
        }
        useGameStateModule.default.mockReturnValue(customMockGameContext)

        const { queryByAltText, getByTestId, queryByTestId } = renderWithProvider(<App testGameState={customMockGameContext}/>, {
            providerProps: customMockGameContext
        })
        const gameOn = getByTestId('game-on')
        const logo = queryByAltText('Tic Tac Toe logo')
        const gameStart = queryByTestId('game-start')
        const gameModal = queryByTestId('game-modal')
        expect(gameOn).toBeInTheDocument()
        expect(logo).not.toBeInTheDocument()
        expect(gameStart).not.toBeInTheDocument()
        expect(gameModal).not.toBeInTheDocument()
    })
    test('renders elements at game on with modal', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                gameOn: true,
                modalState: true
            }
        }
        useGameStateModule.default.mockReturnValue(customMockGameContext)

        const { queryByAltText, getByTestId, queryByTestId } = renderWithProvider(<App testGameState={customMockGameContext}/>, {
            providerProps: customMockGameContext
        })
        const gameOn = getByTestId('game-on')
        const gameModal = getByTestId('game-modal')
        const logo = queryByAltText('Tic Tac Toe logo')
        const gameStart = queryByTestId('game-start')
        expect(gameOn).toBeInTheDocument()
        expect(gameModal).toBeInTheDocument()
        expect(logo).not.toBeInTheDocument()
        expect(gameStart).not.toBeInTheDocument()
    })
})