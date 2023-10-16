import React from 'react'
import { NavLink } from 'react-router-dom'

function LogOut() {
  return (
    <div className='logout'>
        <h1>Hello Dost</h1>
        <div className='button'><NavLink className='ankrRegister' to={'/register'}>Logout</NavLink></div>
    </div>
  )
}

export default LogOut