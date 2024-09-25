import PropTypes from 'prop-types'

export default function Tile({ handleClick, tileContent, id, isHeld}) {
    
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }

    return(
        <button 
        id={id}
        className='game-tile'
        onClick={handleClick}
        style={styles}
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