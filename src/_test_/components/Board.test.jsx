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
        const {getAllByTestId} = renderWithProvider(<Board />, {
            providerProps: mockGameContext
        })
        expect(getAllByTestId(/^tile-/)).toHaveLength(9)
    })
    test('handle player move correctly', () => {
        const {getAllByTestId} = renderWithProvider(<Board />, {
            providerProps: mockGameContext
        })
        const checkTiles = getAllByTestId(/^tile-/)
        checkTiles.forEach( (tile, index) => {
            fireEvent.click(tile)
            expect(mockGameContext.onMakeMove).toHaveBeenCalledWith(index + 1)
        })
        expect(mockGameContext.onMakeMove).toHaveBeenCalledTimes(9)
    })
})

