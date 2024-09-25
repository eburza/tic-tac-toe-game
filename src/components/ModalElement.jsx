import PropTypes from 'react'
import Button from './Button'

export default function ModalElement( {subHeadText, headText, buttonOneId, buttonTwoId, buttonOneClassName, buttonTwoClassName, handleButtonOneClick, handleButtonTwoClick, buttonOneText, buttonTwoText}) {
    return(
        <div>
            { subHeadText ? <p>{subHeadText}</p> : ''}
            <h1>{headText}</h1>
            <Button 
                id={buttonOneId} 
                className={buttonOneClassName} 
                onClick={handleButtonOneClick}
                buttonText={buttonOneText}/>
            <Button 
                id={buttonTwoId} 
                className={buttonTwoClassName} 
                onClick={handleButtonTwoClick}
                buttonText={buttonTwoText}/>
        </div>
    )
}

ModalElement.propTypes = {
    handleButtonOneClick: PropTypes.func,
    handleButtonTwoClick: PropTypes.func,
    subHeadText: PropTypes.string,
    headText: PropTypes.string,
    buttonOneText: PropTypes.string,
    buttonTwoText: PropTypes.string,
    buttonOneId: PropTypes.string,
    buttonTwoId: PropTypes.string,
    buttonOneClassName: PropTypes.string,
    buttonTwoClassName: PropTypes.string
}