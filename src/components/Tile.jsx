import PropTypes from 'prop-types'

export default function Tile({ handleClick, tileContent, id, isHeld}) {

    return(
        <button 
        id={id}
        className='game-tile'
        onClick={handleClick}
        disabled={isHeld}>
            {tileContent}
        </button>
    )
}

Tile.propTypes = {
    handleClick: PropTypes.func,
    tileContent: PropTypes.string,
    id: PropTypes.string,
    isHeld: PropTypes.bool
}