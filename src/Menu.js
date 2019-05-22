import React from 'react';
import {Link} from 'react-router-dom';
import iconburger from './icon-burger.png'
import iconboy from './icon-boy.png'
import iconcoupon from './icon-coupon.png'

function Menu(props) {
    return(
      <div className="menu">
        <Link to = "/"><div> <img src={iconburger} alt="game"/> </div></Link>
        <Link to = "/coupons"><div> <img src={iconboy} alt="boy"/> </div></Link>
        <Link to = "/profile"><div> <img src={iconcoupon} alt="profile"/> <span className="badge"> {props.coupons}</span> </div></Link>
      </div>
  
    );
  }

  export default Menu