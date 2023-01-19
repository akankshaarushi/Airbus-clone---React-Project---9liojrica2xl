import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
import '../Styles/checkout.css';


function Checkout() {

  const renderAfterBooking = useNavigate();

  const {loggedIn, setLoggedIn, bookingData ,setBookingData} = useContext(LoginContext);
  console.log(bookingData, "paste");

  const Tax = (bookingData.flightdetais.price * 18)/100;

  const Total = (bookingData.flightdetais.price *1)+ Tax;

  const price =(bookingData.flightdetais.price *1)

  const [data, setData] = useState([]);

  const handlepayment = () =>{
    setBookingData(()=>{
      return{
       ...bookingData,
       price: price,
       Tax: Tax,
       Total: Total,
      }
    });
    localStorage.setItem("BookingData", JSON.stringify([...data, bookingData]));// inpval k andr hmne name email wgerah store kiya h
    const temp = [...data, bookingData];
    setData( ()=>{
    return temp;
    })
    alert("Booking SuccessFul");
    renderAfterBooking("/booking");

  }


  return (
    <div className='info'>
    <div className='card_ceckout'>
                <div className="card_ceckout_main">
                  <h4>Payment Method</h4>
                </div>
                <form className='form_contol_form'>
                <div className="card_body">
                        <input type="text" placeholder='Name on card' className='form-control' />
                      </div>
                      <div className="card_body">
                        <input type="number" placeholder='Card Number' className='form-control' />
                      </div>
                      <div className="card_body">
                        <input type="date" placeholder='Expiry Date' className='form-control' />
                      </div>
                      <div className="card_body">
                        <input type="text" placeholder='cvv' className='form-control' />
                      </div>
                      </form>
                      <div className="card_Button">
                        <button className='pay_button' onClick={handlepayment}>Pay</button>
                      </div>
                    </div>

                    <div className='card_ceckout1'>
                    <div className='form_contol_form1'>
                      <h3>Booking Summary</h3>
                <div className="card_body1">
                        <h4 className='form-control1'>Ticket Price</h4>
                        <span>{price}</span>
                      </div>
                      <div className="card_body1">
                      <h4 className='form-control1'>Taxes</h4>
                        <span>{Tax}</span>
                      </div>
                      </div>
                      <div className="card_body1">
                      <h4 className='form-control1'>Total Amount</h4>
                        <span>{Total}</span>
                      </div>
                      </div>
                      </div>
 
  )
}

export default Checkout