import PropTypes from 'prop-types'

export default function Button({ buttonText, buttonClass, buttonId, handleClick }) {

    return (
        <button id={buttonId} className={buttonClass} onClick={handleClick}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string,
    buttonId: PropTypes.string,
    handleClick: PropTypes.func
}