import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Login(props) {

 
  const [user,setUser]=useState({
    email:"" , password:""
});
  
function handlerChange(event){
  const {name,value}=event.target
  setUser({...user,[name]:value})
 }

const login=()=>{
  const {email,password,}=user;
  if( email && password){
    axios.post('http://localhost:5000/login',user)
    .then(res=>alert(res.data.message))
        window.location.href='./LogOut'

  }else{
     alert('invalid request')
  } 

}




  return (

    
    <div className='login'>
       <h1>Login</h1>
       <input className="input" type='text' name="email" value={user.email} onChange={handlerChange} placeholder='Enter your Email'></input>
       <input className="input" type='password' name="password" value={user.password} onChange={handlerChange} placeholder='Enter your Password'></input>
      
       <div className='button' onClick={login}>Login</div>
       <div className='or'>or</div>
       <div className='button'><NavLink className='ankrLogin' to={'/register'}>Register</NavLink></div>
    </div>
    
  )
}

export default Login