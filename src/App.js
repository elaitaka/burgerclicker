import React, { Component, useState } from 'react';
import './App.css';
import burger from './burger.jpg'
import burgerhalfeated from './burger_half_eated.png'
import iconburger from './icon-burger.png'
import iconboy from './icon-boy.png'
import iconcoupon from './icon-coupon.png'


class Clicker extends Component {

constructor(props) {
  super(props);
  this.state = {
    cliks : 0
  }
  this.mouseClicked = this.mouseClicked.bind(this);
}

mouseClicked() {
  //console.log("burgeria painettu");
  const klikkaukset = this.state.cliks;
  this.setState(
    {
      cliks : klikkaukset + 1
    }
  );
}

  render() {
    return(
      <div className="clicker">
      <div className="header">
        <h1>Burger Clicker</h1>
      </div>
      <div className="content content--justifield">
        <Stats count={this.state.cliks}/>
        <Burger onClick={this.mouseClicked}/>  
        <Booster boost={"3.4"}/> 
        </div>     
        <Menu coupons={3}/>
        </div>
    );    
  }
}

function Stats(props) {
  return(
    <div className="stats">
      <div className='stats__title'>Burgers</div>
      <div className='stats__count'>{props.count}</div>      
    </div>
  )
}

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

function Booster(props) {
  return(
    <div className="booster">
      {props.boost} burgers click
    </div>
  )
}

function Menu(props) {
  return(
    <div className="menu">
      <div> <img src={iconburger} alt="game"/> </div>
      <div> <img src={iconboy} alt="boy"/> </div>
      <div> <img src={iconcoupon} alt="profile"/> <span className="badge"> {props.coupons}</span> </div>
    </div>

  );
}

export default Clicker;