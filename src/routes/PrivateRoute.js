import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {useUserData} from "../context/userDataContext"

function PrivateRoutes({children}) {
    const location = useLocation()
    const dispatch = useDispatch() 
    const {userData} = useUserData()

    
    
    if(!userData){
        return <Navigate to="/auth/login" replace={true} state={{
          return_url: location.pathname 
        }}/>
    }
  return children
}

export default PrivateRoutes