import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import "../Styles/passengerform.css";

function PassengerForm(props) {

  const afterClick = useNavigate();
const {loggedIn, setLoggedIn, bookingData ,setBookingData} = useContext(LoginContext);
const [passengerData, setPassengerData] = useState({

  passengerName: "",
  passengerAge: "",
  date:"",
  class: "Economy",
   Adult: 1,
   child: 0,
   flightdetais: props.flightdetais,
   price: "",
   Tax: "",
   Total:"",
})

const getdata = (e) => {
  console.log(e.target.value);

  const { value, name } = e.target;

  console.log(value, name);

  setPassengerData(() => {
       return {
            ...passengerData,
            [name]: value
       }
  })

}
const addData = (e) => {
  e.preventDefault();

  const { passengerName, passengerAge, date, Adult,   flightdetais, child} = passengerData;

  if ( passengerName === "") {
    alert("please enter passenger name")
  } else if (passengerAge === "") {

       alert("Age is required");

  }else if (date === "") {
       alert("date field is required");
  } else {
      console.log(passengerData)
      setBookingData(passengerData);
      afterClick("/checkout")
  }

}


  return (
    <div className='form_mains'>
              <form className='forms'>

               <h3 className='passanger_heding'>Flight booking form</h3>
             
              <div>
                            <label>Passenger Name</label>
                            <input type="text" placeholder='Enter your name' className='passenger_input_name' name='passengerName' onChange={getdata} required />
              </div>
              <div>
                            <label>Passenger Age</label>
                            <input type="date" placeholder='Enter your Age' className='passenger_input_age' required name='passengerAge' onChange={getdata}/>
              </div>
              <div> 
                            <label>Travel Date</label>
                            <input type="date" className='passenger_input_age' name='date' onChange={getdata}/>
              </div>
              <div>
                            <label className='class_label'>class</label>
                            <div className="p_label">
                              <div className='Economy_label'>
                            <label>Economy</label>
                            <input type="radio" value={"Economy"} name="class" onChange={getdata} required/>
                            </div>
                            {/* <div  className='Bussiness_label'>
                            <label >Bussiness</label>
                            <input type="radio"  required/>
                            </div> */}
                            </div>
              </div>

              <div className='people'>
                            <div>
                                          <span className='people_class'>Adult (18+)</span>
                                          <select className='select_box'  name=' Adult' onChange={getdata} required>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                        
                                          </select>
                            </div>

                            <div className='child_div'>
                                          <span className='child_span'>child</span>
                                          <select className='select_box' name=' child' onChange={getdata} required>
                                                        <option value="">0</option>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                        
                                          </select>
                            </div>

                            <div className="payment">      
                          <button className='checkout_button' onClick={addData}>Go for Payment</button>
                           </div>
                            </div>

                          
             
              </form>
    </div>
  )
}

export default PassengerForm