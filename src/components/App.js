import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './component/Signup';
import Checkout from './component/Checkout';
import Flightdetail from './component/Flightdetail';
import Flight from './component/Flight';
import { createContext, useState } from 'react';
import Booking from './component/Booking';

export const LoginContext = createContext();


function App() {

 const [loggedIn, setLoggedIn] = useState(false);

 const[bookingData ,setBookingData] = useState({});



  return (
    <div className="App">
<BrowserRouter>
<LoginContext.Provider value = {{loggedIn, setLoggedIn}}>
<Navbar/>
</LoginContext.Provider>
<Routes>
 <Route path='/login' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Login/></LoginContext.Provider>} />
 <Route path='/flightdetail' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Flightdetail/></LoginContext.Provider>} />
  <Route path='/checkout' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Checkout/></LoginContext.Provider>} /> 
 <Route path='/signup' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Signup/></LoginContext.Provider>} /> 
 <Route path='/' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Home/></LoginContext.Provider>} />
 <Route path='/flight/:index' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Flight/></LoginContext.Provider>} />
 <Route path='/booking' element={<LoginContext.Provider value = {{loggedIn, setLoggedIn, bookingData ,setBookingData}}><Booking/></LoginContext.Provider>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
