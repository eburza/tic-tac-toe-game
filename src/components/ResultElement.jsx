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
    text: PropTypes.string,
    player: PropTypes.string,
    counter: PropTypes.any
}