import React from "react";

const HEADS_URL = "https://www.usmint.gov/wordpress/wp-content/uploads/2022/02/2022-roosevelt-dime-uncirculated-obverse-philadelphia-768x768.jpg";
const TAILS_URL = "https://www.usmint.gov/wordpress/wp-content/uploads/2022/02/2022-roosevelt-dime-uncirculated-reverse-768x768.jpg";


/** Show a coin
 * 
 * Props: 
 * - isHeads: true/false
 * 
 * App -> Game --> Coin
 */

function Coin({isHead = true}) {
 
  const src = isHead ? HEADS_URL : TAILS_URL;
  
  return (
    <img style={{width:"100px"}}
      className = "Coin"
      src = {src}
      alt = "coin"
      />
  );
}

export default Coin;