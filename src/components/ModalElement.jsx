import PropTypes from 'prop-types'
import Button from './Button'

export default function ModalElement( {subHeadText, headText, buttonOneId, buttonTwoId, buttonOneClassName, buttonTwoClassName, handleButtonOneClick, handleButtonTwoClick, buttonOneText, buttonTwoText, headTextId}) {
    return(
        <div id='modal-content'>
            { subHeadText && <p id='modal-subhead'>{subHeadText}</p>}
            <h1 id={headTextId} className='modal-head'>
                {headText}
            </h1>
            <div id='modal-buttons'>
                <Button 
                    id={buttonOneId} 
                    buttonClass={buttonOneClassName} 
                    handleClick={handleButtonOneClick}
                    buttonText={buttonOneText}/>
                <Button 
                    id={buttonTwoId} 
                    buttonClass={buttonTwoClassName} 
                    handleClick={handleButtonTwoClick}
                    buttonText={buttonTwoText}/>
            </div>
        </div>
    )
}

ModalElement.propTypes = {
    handleButtonOneClick: PropTypes.func,
    handleButtonTwoClick: PropTypes.func,
    subHeadText: PropTypes.string,
    headText: PropTypes.string,
    headTextId: PropTypes.string,
    buttonOneText: PropTypes.string,
    buttonTwoText: PropTypes.string,
    buttonOneId: PropTypes.string,
    buttonTwoId: PropTypes.string,
    buttonOneClassName: PropTypes.string,
    buttonTwoClassName: PropTypes.string
}