import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import Board from '../../components/Board'

describe('render game board', () => {
    test('board renders correctly', () => {
        const {getByTestId} = render(<Board />)
        expect(getByTestId('game-board-component')).toBeInTheDocument()
    })
    test('renders 9 tile components', () => {
        const mockOnMakeMove = jest.fn()
        const mockOnMakeCpuMove = jest.fn()
        const {getAllByTestId} = renderWithProvider(<Board />, {
            providerProps: mockGameContext
        })
        expect(getAllByTestId(/^tile-/)).toHaveLength(9)
    })
})

