import PropTypes from 'react'
import Button from './Button'

export default function ModalElement( {subHeadText, headText, buttonId, buttonClass, handleClick, buttonText}) {
    return(
        <div>
            <p>{subHeadText}</p>
            <h1>{headText}</h1>
            <Button 
                id={buttonId} 
                className={buttonClass} 
                onClick={handleClick}
                buttonText={buttonText}/>
            <Button 
                id={buttonId} 
                className={buttonClass} 
                onClick={handleClick}
                buttonText={buttonText}/>
        </div>
    )
}

ModalElement.propTypes = {
    handleClick: PropTypes.func,
    subHeadText: PropTypes.string,
    headText: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClass: PropTypes.string,
    buttonId: PropTypes.string
}