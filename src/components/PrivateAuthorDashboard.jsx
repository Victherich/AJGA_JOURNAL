import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateAuthorDashboard = () => {
    const [userToken,setUserToken]=useState(false)
  return (
  
      userToken?<Outlet/>:<Navigate to='/authorlogin'/>
   
  )
}

export default PrivateAuthorDashboard
