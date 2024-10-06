import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import Modal from '../../components/Modal'
import { fireEvent } from '@testing-library/react'

describe('render modal', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('modal renders correctly when geme results' , () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                gameWinner: 'X'
            }
        }
        const {getByTestId} = renderWithProvider(<Modal />, {
            providerProps: customMockGameContext
        })
        expect(getByTestId('modal')).toBeInTheDocument()
    })
    test('modal renders correctly when reset button' , () => {
        const {getByTestId} = renderWithProvider(<Modal />, {
            providerProps: mockGameContext
        })
        expect(getByTestId('modal')).toBeInTheDocument()
    })
    test('modal do not render' , () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                modalState: false
            }
        }
        const {queryByTestId} = renderWithProvider(<Modal />, {
            providerProps: customMockGameContext
        })
        expect(queryByTestId('modal')).not.toBeInTheDocument()
    })
    test('modal buttons calls function when game winner', () => {
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                gameWinner: 'X'
            }
        }
        const {getByText} = renderWithProvider(<Modal />, {
            providerProps: customMockGameContext
        })
        const quitButton = getByText('Quit')
        const nextRoundButton = getByText('Next round')
        fireEvent.click(quitButton)
        fireEvent.click(nextRoundButton)
        expect(customMockGameContext.onQuitGame).toHaveBeenCalled()
        expect(customMockGameContext.onNewRound).toHaveBeenCalled()
    })
    test('modal buttons calls function when reset button', () => {
        const {getByText} = renderWithProvider(<Modal />, {
            providerProps: mockGameContext
        })
        const restartGameButton = getByText('Yes, restart')
        const cancelRestartGameButton = getByText('No, cancel')
        fireEvent.click(restartGameButton)
        fireEvent.click(cancelRestartGameButton)
        expect(mockGameContext.onRestartGame).toHaveBeenCalled()
        expect(mockGameContext.onCancelRestartGame).toHaveBeenCalled()
    })
    
})