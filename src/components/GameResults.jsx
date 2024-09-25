import ResultElement from './ResultElement'

export default function GameResults() {
    return(
        <>
            <ResultElement 
                text='X'
                player='(P1)'
                counter={`0`}
            />
            <ResultElement 
                text='TIES'
                counter={`0`}
            />
            <ResultElement 
                text='O'
                player='(P2)'
                counter={`0`}
            />
        </>
    )
}