import { render, fireEvent, getByRole, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import PlayerTurn from '../../components/PlayerTurn'

describe('player turn', () => {
    test('renders correctly', () => {
        const {getByTestId} = render(<PlayerTurn id='test-player-turn' />)
        expect(getByTestId('player-turn')).toBeInTheDocument()
    })
    test('renders player turn correctly', () => {
        const {getByAltText} = render(<PlayerTurn id='test-player-turn' isXTurn={true}/>)
        expect(getByAltText('X')).toBeInTheDocument()
    })
})