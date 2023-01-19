import React from 'react';
import '../Styles/booking.css';

function Booking() {

              const BookingData = JSON.parse(localStorage.getItem("BookingData"));
              console.log(BookingData);

  return (
    <div className='booking_main'>
       {
              BookingData.map((data)=>(
                            
                            <div className="booking_card">

       <div className="booking_flight_name">
              <div className="booking_flight_name1">
                            <h5>Airlne Name</h5>
                            <span>{data.flightdetais.airlineName}</span>
                            </div>
              </div>
              <div className="booking_flight_name">
                            <h5>From</h5>
                            <span>{data.flightdetais.from}</span>
              </div>
              <div className="booking_flight_name">
                            <h5>To</h5>
                            <span>{data.flightdetais.to}</span>
              </div>
              <div className="booking_flight_name">
                            <h5>Passenger Name</h5>
                            <span>{data.passengerName}</span>
              </div>
              <div className="booking_flight_name">
                            <h5> Age</h5>
                            <span>{data.passengerAge}</span>
              </div>
              <div className="booking_flight_name">
                            <h5>Date</h5>
                            <span>{data.date}</span>
              </div>
              <div className="booking_flight_name">
                            <h5>Class</h5>
                            <span>{data.class}</span>
              </div>
              <div className="booking_flight_name">
                            <h5>Total Amount</h5>
                            <span>{data.Total}</span>
              </div>
       </div>
              ))
       }
    </div>
  )
}

export default Booking