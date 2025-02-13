import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateReviewerSignup = () => {
   
   const reviewerToken = useSelector(state=>state.reviewerToken)
    
  return (
   reviewerToken?<Navigate to="/"/>:<Outlet/>
  )
}

export default PrivateReviewerSignup
