import {Grid}from 'semantic-ui-react'
import { Square } from '../components/Square'
import { useEffect, useState } from 'react';
type player='X'|'O'|null;
export const GameBoard:React.FunctionComponent = () => {
    
     const activeplayer=Math.round(Math.random()+1)===1 ?'X':'O';
     const [currentPlayer,setCurrentPlayer]=useState<'X'|'O'>(activeplayer);
     const [squares,setSquares]=useState<player[]>(Array(9).fill(null));
        const [winner,setWinner]=useState<string | null>(null);
   const setSquareValue=(index:number)=>{
      const currentGameStatus= squares.map((value,i)=>{
        if(i===index){
            return currentPlayer
        }
        
        return value;
    })
    setSquares(currentGameStatus);
    setCurrentPlayer(currentPlayer==='X'? 'O':'X')     

   }
   useEffect(()=>{
   const winnerplayer=calculateWinner(squares)
   if(winnerplayer){
    setWinner(`${winnerplayer} is the winner`)
   }else if(!winnerplayer && !squares.filter((square)=>!square).length){
      setWinner(`Both players won.Reload for new game..`)
   }
       
   })
   const  calculateWinner= (squares:player[])=>{
    const winnerIndexCombinations=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
   return winnerIndexCombinations.map((combinations)=>{
        const [a,b,c]=combinations;
        if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a]
        }
    }).filter((winner)=>winner)[0]


   }

  return (
    <div  className='container-gameboard'>
        {winner ? <p>{winner}</p>:<p>Hey,{currentPlayer} it's your turn..</p>}
       
        <Grid columns={3} centered> 
            {
                Array(9).fill(null).map((value,index)=>(
                <Grid.Column  className='gameboard-column'>
                   <Square
                   onClick={()=>setSquareValue(index)}
                   value={squares[index]}
                   winner={winner}
                     />
                </Grid.Column>))
            }


        </Grid>
      
    </div>
  )
}

