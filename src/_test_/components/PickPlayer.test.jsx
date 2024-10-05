import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import PickPlayer from '../../components/PickPlayer'
import { mockGameContext } from '../utilis/test-mockGameContext'

describe('pick player component', () => {
    test('component renders correctly', () => {
        const {getByTestId} = render(<PickPlayer id='test-pick-player-component'/>)
        expect(getByTestId('pick-player-component')).toBeInTheDocument()
    })
    test('player X icon renders correctly', () => {
        const {getByAltText} = render(<PickPlayer id='test-pick-player-icon' />)
        expect(getByAltText('X')).toBeInTheDocument()
    })
    test('player O icon renders correctly', () => {
        const {getByAltText} = render(<PickPlayer id='test-pick-player-icon' />)
        expect(getByAltText('O')).toBeInTheDocument()
    })
    test('render all buttons', () => {
        const {getAllByRole} = render(<PickPlayer id='test-pick-player-render-buttons'/>)
        expect(getAllByRole('button')).toHaveLength(2)
    })
    test('calls onSetPlayer when X button is clicked', () => {

        const {getByTestId} = renderWithProvider(<PickPlayer id='test-pick-x-player' />, {
            providerProps: mockGameContext
        })
        fireEvent.click(getByTestId('player-X'))
        expect(mockGameContext.onSetPlayer).toHaveBeenCalledWith(true)
    })
    test('calls onSetPlayer when O button is clicked', () => {
        const {getByTestId} = renderWithProvider(<PickPlayer id='test-pick-o-player' />, {
            providerProps: mockGameContext 
        })
        fireEvent.click(getByTestId('player-O'))
        expect(mockGameContext.onSetPlayer).toHaveBeenCalledWith(false)
    })
    
})