import React, {useContext, useState} from 'react';
import '../Styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';


const  Login= () => {

     const {loggedIn, setLoggedIn}= useContext(LoginContext);

     const history = useNavigate();

              const [inpval, setInpval] = useState({
                           
                            email: "",
                            password: ""
              })


         const [data, setData] = useState([]);
      
              const getdata = (e) =>{
              // console.log(e.target.value);
                   
              const {value,name} = e.target;

              // console.log(value, name);

              setInpval(()=>{
                            return{
                                          ...inpval,
                                          [name]:value
                            }
              })

              }

              const addData = (e) =>{
                            e.preventDefault();

                            const getuserArr = localStorage.getItem('userData');
                            console.log(getuserArr);


                            
                            const {email,password} = inpval;
                             if(email === ""){

                                          alert("email field is required");

                            }else if(!email.includes('@')){
                                          alert("please enter valid email address");
                            }
                           else if(password === ""){
                                          alert("password field is required");
                            }else if(password.length < 5){
                                          alert("password length should be greater than five");
                            }else{

                              if(getuserArr && getuserArr.length){
                                   const userdata = JSON.parse(getuserArr);
                                   const userlogin = userdata.filter((el,k)=>{
                                        return el.email === email && el.password === password
                                   });
                                  
                                   if(userlogin.length ===0){
                                        alert("Invalid details");
                                        setLoggedIn(false);
                                   }else{
                                        setLoggedIn(true);
                                        history("/");
                                   }
                              }
                                        

                            }


              }

              return (
                            <div className="wrapper">
                                          <div className='login'>
                                                       <h1>User Login</h1>
                                                        <div className="form-group">
                                                                      <input type="email" className='Inputs' name="email" onChange={getdata} placeholder='email address'/>
                                                        </div>
                                                        <div className="form-group">
                                                                      <input type="password" name="password" onChange={getdata}  className='Inputs' placeholder='password' />
                                                        </div>
                                                        <div className="button">
                                                                      <button className='bttn' onClick={addData}>Log In</button>
                                                        </div>
                                                        <a href="#"><span className='pan'>New User? <Link to="/signup">Sign Up</Link>
                                                        </span></a>


                                          </div>

                                          
                       
                            </div>
              )
}

export default Login;