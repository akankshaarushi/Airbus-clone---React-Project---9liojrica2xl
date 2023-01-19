import React, { useState, useEffect } from 'react';
import '../Styles/flightdetails.css';
import { FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Flightdetail() {


  const [flightdata, setflightdata] = useState([]);

  const fetchData = () => {
    fetch("https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights")
      .then((Response) => {
        return Response.json();
      }).then((data) => {


       setflightdata(data);


      })
  }
  useEffect(() => {
    fetchData();

  }, [])
  console.log(flightdata, "data");




  return (
    <div className=' main_containers'>
      <div className="search_flight">
        <h2 className='head'>List of Flights</h2>
        {/* <input type="text" placeholder='search your flight' className='input_field' />
         <span className='iconss'><FaSistrix className='fav'/></span> */}

      </div>
      <div className="card_container">

        {
          flightdata.map((item, index) => {
            return (

              <div className="card">
                <div className="airline_name">
                  <h5>Airline</h5>
                  <span> {item.airlineName}</span>
                </div>
                <div className="Departure">
                  <h5>{item.from}</h5>
                  <p>
                    <span>{item.departure.departureTime}</span>
                    <span>{item.departure.departureDate}</span>
                  </p>
                </div>
                <div className="via">
                  <h5>{item.via[0]}</h5>
                  <p>{item.duration}</p>
                </div>
                <div className="to">
                  <h5>{item.to}</h5>
                  <p>
                    <span>arrival-time</span>
                    <span>arrival-date</span>
                  </p>
                </div>
                <div className="price">
                  <h5>{item.price}</h5>
                  <Link to={`/flight/from=${item.from}&to=${item.to}`}><button className='button_book'>Book now</button></Link> 
                  
                </div>

                
              </div>
              
            )
          })
        }


      </div>
    
    </div>

  )
}

export default Flightdetail