import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateEditorDashboard = () => {
 
    const editorToken = useSelector(state=>state.editorToken)
  return (
  
      editorToken?<Outlet/>:<Navigate to='/editorlogin'/>
   
  )
}

export default PrivateEditorDashboard
