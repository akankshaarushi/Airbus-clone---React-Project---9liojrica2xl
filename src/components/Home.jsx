import React, { useState } from 'react';
import '../Styles/home.css';
import {FaSistrix} from "react-icons/fa";
import { Link } from 'react-router-dom';


function Home() {

  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Mumbai");

  const handleFrom = (e) =>{
    setFrom(e.target.value)
  }

  const handleTo = (e) => {
      setTo(e.target.value)
  }
  return (
    <div className='Home'>
    <div className='SearchCard'>
 <div className="from">
              <label>From</label>
              <select name="select_box" id="selects" onChange={handleFrom}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Chennai">Chennai</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Varansi">Varansi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
 </div>

 <div className="from">
              <label>To</label>
              <select name="select_to" id="selects_to" onChange={handleTo}>
                <option value="Mumbai">Mumbai</option>
                <option value="Goa">Goa</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Indore">Indore</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="jaipur">Jaipur</option>
              </select>
 </div>

 <div className="from">
              <label>Depart</label>
              <input type="date" />
 </div>

 <div className="from">
              <label>Return</label>
              <input type="date" />
 </div>

 <div className="from">
 <Link to={`/flight/from=${from}&to=${to}`} ><button className='btnSearch'><span className='icons'><FaSistrix/></span>Search Flight</button></Link>
 </div>
    </div>
    </div>
  )
}

export default Home