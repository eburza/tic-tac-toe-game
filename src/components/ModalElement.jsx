import { useContext } from 'react'
import GameContext from '../Context'
import PropTypes from 'prop-types'
import Button from './Button'
import playerX from '../assets/icon-x.svg'
import playerO from '../assets/icon-o.svg'

export default function ModalElement( {subHeadText, headText, buttonOneId, buttonTwoId, buttonOneClassName, buttonTwoClassName, handleButtonOneClick, handleButtonTwoClick, buttonOneText, buttonTwoText, headTextId}) {
    
    const { state } = useContext(GameContext)

    return(
        <div id='modal-content'>
            { subHeadText && <p id='modal-subhead'>{subHeadText}</p>}
            <h1 id={headTextId} className='modal-head'>
                {state.gameWinner !== '' && <img id='modal-head-img' src={state.gameWinner === 'X' ? playerX : state.gameWinner === 'O' ? playerO : ''}/>}
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