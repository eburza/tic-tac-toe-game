import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithProvider } from '../utilis/test-utils'
import { mockGameContext } from '../utilis/test-mockGameContext'
import * as useGameStateModule from '../../states/useGameState';
import GameStart from '../../GameStart'

describe('render game start', () => {
    test('renders correctly', () => {
        const {getByTestId} = render(<GameStart />)
        expect(getByTestId('game-start')).toBeInTheDocument()
    })
})