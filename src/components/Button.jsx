import PropTypes from 'prop-types'

export default function Button({ buttonText, buttonClass, buttonId, onGameStartChange }) {

    function handleGameStartChange() {
        onGameStartChange(true)
    }

    return (
        <button id={buttonId} className={buttonClass} onClick={handleGameStartChange}>{buttonText}</button>
    )
}

Button.propTypes = {
    onGameStartChange: PropTypes.func,
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonId: PropTypes.string
}