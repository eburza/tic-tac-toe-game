import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import GameResults from '../../components/GameResults'


describe('renders game results', () => {
    test('renders results component', () => {
        const {getByTestId} = render(<GameResults />)
        expect(getByTestId('game-results')).toBeInTheDocument()
    })
    test('renders 3 result elements', () => {
        const {getAllByTestId} = render(<GameResults />)
        expect(getAllByTestId(/^result-/)).toHaveLength(3)
    })
    test('renders correct score for X', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                playerXScore: 5
            }
        }
        const {getByTestId} = renderWithProvider(<GameResults />, {
            providerProps: customMockGameContext
        })
        expect(getByTestId('result-player-x')).toBeInTheDocument()
        expect(getByTestId('result-player-x')).toHaveTextContent('5')
    })
    test('renders correct score for O', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                playerOScore: 3
            }
        }
        const {getByTestId} = renderWithProvider(<GameResults />, {
            providerProps: customMockGameContext
        })
        expect(getByTestId('result-player-o')).toBeInTheDocument()
        expect(getByTestId('result-player-o')).toHaveTextContent('3')
    })
    test('renders correct score for TIE', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                tiesScore: 4
            }
        }
        const {getByTestId} = renderWithProvider(<GameResults />, {
            providerProps: customMockGameContext
        })
        expect(getByTestId('result-tie')).toBeInTheDocument()
        expect(getByTestId('result-tie')).toHaveTextContent('4')
    })
})