import React, { Component } from 'react';
import Stats from './Stats';
import Burger from './Burger.js';
import Booster from './Booster.js';


class Game extends Component {

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
            <React.Fragment>  
            <div>   
                <div className="header">
                    <h1>Burger Clicker</h1>
                </div>
                <div className="content content--justifield">
                    <Stats count={this.state.cliks}/>
                    <Burger onClick={this.mouseClicked}/>  
                    <Booster boost={"3.4"}/> 
                </div> 
            </div>  
            </React.Fragment>        
        );    
  }
}

export default Game;