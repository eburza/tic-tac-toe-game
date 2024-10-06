import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import ResetButton from '../../components/ResetButton'

describe('render reset button', () => {
    test('reset button renders correctly', () => {
        const {getByRole} = render(<ResetButton />)
        expect(getByRole('button')).toBeInTheDocument()
    })
    test('handle reset', () => {
        const {getByRole} = renderWithProvider(<ResetButton />, {
            providerProps: mockGameContext
        })
        fireEvent.click(getByRole('button'))
        expect(mockGameContext.onGameResetButton).toHaveBeenCalled()
    })
})