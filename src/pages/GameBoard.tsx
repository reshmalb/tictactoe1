import {Grid}from 'semantic-ui-react'
import { Square } from '../components/Square'
import { useState } from 'react';
export const GameBoard:React.FunctionComponent = () => {
    
     const activeplayer=Math.round(Math.random()+1)===1 ?'X':'O';
     const [currentPlayer,setCurrentPlayer]=useState<'X'|'O'>(activeplayer);
     const [squares,setSquares]=useState(Array(9).fill(null));

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

  return (
    <div  className='container-gameboard'>
        <p>hey{currentPlayer} it's yuour turn</p>
        <Grid columns={3} centered> 
            {
                Array(9).fill(null).map((value,index)=>(
                <Grid.Column  className='gameboard-column'>
                   <Square
                   onClick={()=>setSquareValue(index)}
                   value={squares[index]}
                     />
                </Grid.Column>))
            }


        </Grid>
      
    </div>
  )
}

