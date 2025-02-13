import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateAuthorDashboard = () => {
 
    const authorToken = useSelector(state=>state.authorToken)
  return (
  
      authorToken?<Outlet/>:<Navigate to='/authorlogin'/>
   
  )
}

export default PrivateAuthorDashboard
