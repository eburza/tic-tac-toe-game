import PropTypes from 'prop-types'
import playerXtile from '../assets/icon-x.svg'
import playerOtile from '../assets/icon-o.svg'
import { PLAYER_X, PLAYER_O } from '../states/gameConstants'


export default function Tile({ handleClick, tileContent, id, isHeld, ...props}) {

    return(
        <button 
        id={id}
        className='game-tile'
        onClick={handleClick}
        disabled={isHeld}
        {...props}>
                    {
        tileContent === PLAYER_X ? 
        <img src={playerXtile} alt={PLAYER_X}/> :
        tileContent === PLAYER_O ?
        <img src={playerOtile} alt={PLAYER_O}/> :
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