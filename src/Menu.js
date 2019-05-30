import React from 'react';
import {Link} from 'react-router-dom';
import iconburger from './icon-burger.png'
import iconboy from './icon-boy.png'
import iconcoupon from './icon-coupon.png'

function Menu(props) {
    return(
      <div className="menu">
        <Link to = "/"><div> <img src={iconburger} alt="game"/> </div></Link>        
        <Link to = "/coupons"><div> <img src={iconcoupon} alt="coupons"/> <span className="badge"> {props.claimableCoupons}</span> </div></Link>
        <Link to = "/profile"><div> <img src={iconboy} alt="profile"/> </div></Link>
      </div>
  
    );
  }

  export default Menu