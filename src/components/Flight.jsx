import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';
import '../Styles/flight.css';
import { Link } from 'react-router-dom';
import PassengerForm from './PassengerForm';

function Flight() {

const param = useParams();
const [flightData, setflightData] = useState({});
const [formShow, setFormShow] = useState(false)

function fetchApi (){
  fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?${param.index}`)
 .then((response) =>{
  return response.json();
 }).then((data)=>{
console.log(data[0])  
  setflightData(data[0]);
 })
}


useEffect(() => {
 
  fetchApi();

  
}, [])


  return (
    <div className='card_main'>
     <div className="card_flight">
                <div className="name">
                  <h5>Airline</h5>
                  <span> {flightData.airlineName}</span>
                </div>
                <div className="name">
                  <h5>{flightData.from}</h5>
                  <p>
                    <span>{}</span>
                    <span>{}</span>
                  </p>
                </div>
                <div className="name">
                  <h5>Via : {}</h5>
                  <p>{flightData.duration}</p>
                </div>
                <div className="name">
                  <h5>{flightData.to}</h5>
                  <p>
                    <span>arrival-time</span>
                    <span>arrival-date</span>
                  </p>
                </div>
                <div className="name">
                <h5>Price  <br />{flightData.price}</h5>
                <button className='book_button' onClick={()=>{
                  setFormShow(!formShow)
                }}>Book now</button>

                  
                  
                </div>
                </div>

                {
                  formShow ? <PassengerForm flightdetais={flightData}/> : ""
                }
    </div>
  )
}

export default Flight