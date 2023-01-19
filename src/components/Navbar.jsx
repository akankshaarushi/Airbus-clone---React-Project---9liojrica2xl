import React, { useContext } from 'react';
import "../Styles/navbar.css";
import { Link } from 'react-router-dom';
import { LoginContext } from '../App';
// import { Avatar } from '@material-ui/core';



const Navbar = () => {

  const {loggedIn, setLoggedIn}= useContext(LoginContext);

  return (
<section id="block-airbus-brand-branding" class="block block-system block-system-branding-block">
<div class="ds-header-home">
{/* <div className="avtaar">
  {
    loggedIn ? < Avatar/>: <Link to="/login"><button className='btn1'>Login</button></Link>
  }
  </div>  */}
<div class="ds-header-logo">
<Link to="/login"><button className='btn1'>Login</button></Link>
  <Link to='/flightdetail'><button className='btn2'>All Flights</button></Link>
  <Link to='/booking'><button className='btn3'>Booking</button></Link>
  <a tabindex="0" href="/en" rel="home" id="logo">
<Link to="/"><img src="https://wallpapercave.com/wp/wp3212938.png" alt="Airbus "/></Link>
</a>
</div>
<div class="ds-header-appname"></div>
</div>
</section>
  )
}

export default Navbar