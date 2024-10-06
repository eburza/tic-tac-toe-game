import PropTypes from 'prop-types'

export default function ResultElement({text, counter, player, id, ...props}) {

    return(
        <div className='result-element'id={id} {...props}>
            <p className='result-text-top'>{`${text} ${player ? player : ''}`}</p>
            <p className='result-text-counter'>{counter}</p>
        </div>
    )
}

ResultElement.propTypes = {
    id: PropTypes.any,
    text: PropTypes.any,
    player: PropTypes.any,
    counter: PropTypes.any
}