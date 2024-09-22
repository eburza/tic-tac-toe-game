import PropTypes from 'prop-types'

export default function Button({ buttonText, buttonClass, buttonId }) {
    return (
        <button id={buttonId} className={buttonClass}>{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    buttonId: PropTypes.string
}