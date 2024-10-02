import PropTypes from 'prop-types'
import playerXtile from '../assets/icon-x.svg'
import playerOtile from '../assets/icon-o.svg'

export default function Tile({ handleClick, tileContent, id, isHeld}) {

    return(
        <button 
        id={id}
        className='game-tile'
        onClick={handleClick}
        disabled={isHeld}>
                    {
        tileContent === 'X'? 
        <img src={playerXtile}/> :
        tileContent === 'O' ?
        <img src={playerOtile}/> :
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