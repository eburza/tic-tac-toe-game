import PropTypes from 'prop-types'
import playerXtile from '../assets/icon-x.svg'
import playerOtile from '../assets/icon-o.svg'
import playerXoutline from '../assets/icon-x-outline.svg'
import playerOoutline from '../assets/icon-o-outline.svg'
import { PLAYER_X, PLAYER_O } from '../states/gameConstants'
import { useContext, useState } from 'react'
import GameContext from '../Context'

export default function Tile({ handleClick, tileContent, id, isHeld, ...props}) {
    const [isHovered, setIsHovered] = useState(false)
    const { state } = useContext(GameContext)

    const handleMouseEnter = () => {
        if (!isHeld && !isCpuTurn) {
            setIsHovered(true)
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const isCpuTurn = state.gameCpu && (
        (state.playerX && !state.isXTurn) || 
        (!state.playerX && state.isXTurn)
    )

    return(
        <button 
        id={id}
        className='game-tile'
        onClick={handleClick}
        disabled={isHeld || isCpuTurn}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}>
        {
            tileContent === PLAYER_X ? 
            <img src={playerXtile} alt={PLAYER_X}/> :
            tileContent === PLAYER_O ?
            <img src={playerOtile} alt={PLAYER_O}/> :
            isHovered ?
            <img src={state.isXTurn ? playerXoutline : playerOoutline} alt={state.isXTurn ? PLAYER_X : PLAYER_O}/> :
            ''
        }
        </button>
    )
}

Tile.propTypes = {
    handleClick: PropTypes.func,
    tileContent: PropTypes.string,
    id: PropTypes.string,
    isHeld: PropTypes.bool
}