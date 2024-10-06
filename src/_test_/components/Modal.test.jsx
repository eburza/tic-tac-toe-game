import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import Modal from '../../components/Modal'

describe('render modal', () => {
    test('modal renders correctly when gema results' , () => {
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
        const customMockGameContext = {
            ...mockGameContext,
            state: {
                ...mockGameContext.state,
                gameWinner: ''
            }
        }
        const {getByTestId} = renderWithProvider(<Modal />, {
            providerProps: customMockGameContext
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
    
})