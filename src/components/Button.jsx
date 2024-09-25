import PropTypes from 'prop-types'

export default function Button({ buttonText, buttonClass, buttonId, handleClick }) {

    return (
        <button id={buttonId} className={buttonClass} onClick={handleClick}>{buttonText}</button>
    )
}

Button.propTypes = {
    onGameStartChange: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonId: PropTypes.string,
    handleClick: PropTypes.func
}