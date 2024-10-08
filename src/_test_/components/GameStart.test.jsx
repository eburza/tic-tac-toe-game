import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import GameStart from '../../GameStart'

describe('render game start', () => {
    test('renders correctly', () => {
        const {getByTestId} = render(<GameStart />)
        expect(getByTestId('game-start')).toBeInTheDocument()
    })
    test('renders pick player component', () => {
        const {getByTestId} = render (<GameStart />)
        expect(getByTestId('pick-player-component')).toBeInTheDocument()
    })
    test('renders new game buttons', () => {
        const {getAllByText} = render (<GameStart />)
        expect(getAllByText(/new\s+game/i)).toHaveLength(2)
    })
    test('new game cpu is functional', () => {
        const {getByText} = renderWithProvider(<GameStart />, {providerProps: mockGameContext})
        fireEvent.click(getByText('New Game (vs CPU)'))
        expect(mockGameContext.onStartGame).toHaveBeenCalledWith(true)
    })
    test('new game player is functional', () => {
        const {getByText} = renderWithProvider(<GameStart />, {providerProps: mockGameContext})
        fireEvent.click(getByText('New Game (vs player)'))
        expect(mockGameContext.onStartGame).toHaveBeenCalledWith(true)
    })
})