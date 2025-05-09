import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateEditorSignup = () => {
   
   const editorToken = useSelector(state=>state.editorToken)
    
  return (
   editorToken?<Navigate to="/"/>:<Outlet/>
  )
}

export default PrivateEditorSignup
