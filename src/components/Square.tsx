interface SquareProps{
    onClick:()=>void,
    value:'X'|'O'|null
}

export const Square:React.FC<SquareProps>=({onClick,value})=>{
    return(
    <button className='gameboard-square'
        onClick={onClick}
    >{value}
    
    </button>
    )
}
