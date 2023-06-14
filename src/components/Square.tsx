import { NumberLiteralType } from "typescript"

interface SquareProps{
    onClick:()=>void,
    value:'X'|'O'|null,
    winner:string|null
}

export const Square:React.FC<SquareProps>=({onClick,value,winner})=>{
  if(!value){
    return(
        <button className={`gameboard-square player_${value}`}
            onClick={onClick}
            disabled={Boolean(winner)}
        >{value}
        
        </button>
        )
  }
  return(
    <button className={`gameboard-square player_${value}`}
        disabled
    >{value}
    
    </button>
    )
}
