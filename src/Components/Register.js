import { useState } from "react"
import axios from "axios";
import { NavLink } from "react-router-dom";

function Register(props) {

  const [user,setUser]=useState({
    name:"" ,email:"" , password:"" ,cpassword:""
});
  
function handlerChange(event){
  const {name,value}=event.target
  setUser({...user,[name]:value})
 }


const register=()=>{
  const {name,email,password,cpassword}=user;
  if(name && email && password && (password && cpassword)){
    axios.post('http://localhost:5000/register',user)
    .then(res=>alert(res.data.message))
  }else{
     alert('invalid request')
  }

}

  return (
    <div className="contrainer">
 <div className='register'>
       <h1>Register</h1>
       <input className="input"  type='text' name="name"  value={user.name} placeholder='Enter your Name' onChange={handlerChange} ></input>

       <input className="input" type='email' name="email" value={user.email} placeholder='Enter your Email' onChange={handlerChange} ></input>

       <input className="input" type='password' name="password" value={user.password} placeholder='Enter your Password' onChange={handlerChange} ></input>

       <input className="input" type='password' name="cpassword" value={user.cpassword}  placeholder='Enter your Confirm Password' onChange={handlerChange} ></input>


       <div className='button' onClick={register}>Register</div>
       <div className='or'>or</div>
       <div className='button'><NavLink className='ankrRegister' to={'/login'}>Login</NavLink></div>
    </div>
    </div>
  )
}

export default Register