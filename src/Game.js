import { useState } from "react";
import Coin from "./Coin";

function getRandBool(){
  return Math.random() < 0.5;
}

function Game(){
  const [side, setSide] = useState(true);
  const [count, setCount] = useState({
    heads:0,
    tails:0,
    total:0
  })
  
  function handleClick(){
    setSide(getRandBool());
    
    side ? ++count.heads : ++ count.tails;
    ++count.total;
    
    setCount(count);
  }
  
  
  return (
    <div>
      <h1>Let's flip a coin!</h1>
      <Coin isHead={side} />
      <button onClick={handleClick}>FLIP THE COIN ! ! :D </button>
      <p>Out of {count.total}, there have been {count.heads} heads and {count.tails} tails.</p>
    </div>
  )
}

export default Game;
