import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateAuthorSignup = () => {
   
   const authorToken = useSelector(state=>state.authorToken)
    
  return (
   authorToken?<Navigate to="/"/>:<Outlet/>
  )
}

export default PrivateAuthorSignup
