import PropTypes from 'prop-types'

export default function Tile({ className, handleClick, tileContent, id, isHeld}) {
    
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }

    return(
        <button 
        id={id}
        className={className}
        onClick={handleClick}
        style={styles}>
            {tileContent}
        </button>
    )
}

Tile.propTypes = {
    handleClick: PropTypes.func,
    tileContent: PropTypes.string,
    key: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    isHeld: PropTypes.bool
}