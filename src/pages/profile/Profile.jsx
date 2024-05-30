import React from 'react'
import "./profile.css"
import { useLocation } from 'react-router-dom'

const Profile = () => {
    const {state} = useLocation()
    console.log(state);
  return (
    <div className='profilediv'>
        <h1 className='hh1'>Welcome to your Profile dear {state?.username}</h1>
    </div>
  )
}

export default Profile
