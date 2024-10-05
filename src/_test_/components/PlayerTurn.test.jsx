import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import PlayerTurn from '../../components/PlayerTurn'

describe('player turn', () => {
    test('renders correctly', () => {
        const {getByTestId} = render(<PlayerTurn id='test-player-turn' />)
        expect(getByTestId('player-turn')).toBeInTheDocument()
    })
    test('renders player turn correctly', () => {
        const {getByAltText} = render(<PlayerTurn id='test-player-turn' />)
        expect(getByAltText('X')).toBeInTheDocument()
    })
})