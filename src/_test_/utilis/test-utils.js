import React from 'react'
import { render } from '@testing-library/react'
import GameContext from '../../Context'

const renderWithProvider = (ui, {providerProps, ...renderOptions}) => {
    return render(
        <GameContext.Provider value={providerProps}>
            {ui}
        </GameContext.Provider>,
        renderOptions
    )
}

export { renderWithProvider }