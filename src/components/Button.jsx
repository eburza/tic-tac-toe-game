import PropTypes from 'prop-types'

export default function Button({ buttonText, buttonClass, buttonId, handleClick, props }) {

    return (
        <button id={buttonId} className={buttonClass} onClick={handleClick} {...props}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string,
    buttonId: PropTypes.string,
    handleClick: PropTypes.func
}