import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateReviewerDashboard = () => {
 
    const reviewerToken = useSelector(state=>state.reviewerToken)
  return (
  
      reviewerToken?<Outlet/>:<Navigate to='/reviewerlogin'/>
   
  )
}

export default PrivateReviewerDashboard
