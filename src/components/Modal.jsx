import ModalElement from './ModalElement'

export default function Modal() {

    function onClick() {
        console.log('clicked')
    }

    return (
        <ModalElement 
        subHeadText='subHeadText'
        headText='HeadText'
        buttonText='buttonText'
        handleClick={onClick}
        className='buttonClass'
        buttonId='buttonId'
        />
    )
}