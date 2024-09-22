import Logo from './assets/logo.svg'
import PickPlayer from './components/PickPlayer'
import Button from './components/Button'

export default function GameStart() {
    return (
        <>
            <img src={Logo} alt="Tic Tac Toe logo"/>
            <PickPlayer />
            <Button 
                buttonText="ButtonText"
                buttonClass="buttonClass"
                buttonId="buttonId"
            />
        </>
    )
}