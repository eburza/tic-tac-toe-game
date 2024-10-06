import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import * as useGameStateModule from '../../states/useGameState';
import Game from '../../Game'

describe('render game on', () => {
    test('renders correctly', () => {
        const {getByTestId} = render(<Game />)
        expect(getByTestId('game-on')).toBeInTheDocument()
    })
})