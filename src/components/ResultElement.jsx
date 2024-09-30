import PropTypes from 'prop-types'

export default function ResultElement({text, counter, player}) {

    return(
        <div>
            <p>{`${text} ${player ? player : ''}`}</p>
            <p>{counter}</p>
        </div>
    )
}

ResultElement.propTypes = {
    text: PropTypes.any,
    player: PropTypes.any,
    counter: PropTypes.any
}