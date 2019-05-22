import React, { useState } from 'react';
import burger from './burger.jpg'
import burgerhalfeated from './burger_half_eated.png'

function Burger(props) { 

    const [pressed, setPressed] = useState(false);
    const classValue = pressed ? "burger__img burger__img--pressed" : "burger__img"
    var imageName = pressed ? burger : burgerhalfeated
    //console.log(imageName);
  
      return(
        <div className = "burger">        
          <img src={imageName}
          alt="" 
          className={classValue} 
          onClick={props.onClick}
          onPointerDown = {() => setPressed(true)}
          onPointerUp = {() => setPressed(false)}
          />        
        </div>
      ); 
  }

  export default Burger;