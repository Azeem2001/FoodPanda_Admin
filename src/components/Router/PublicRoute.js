import { Login } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const PrivateRoute = ({component}) => {
let navigate = useNavigate()    
 useEffect(()=>{
    let token = localStorage.getItem("token")
     if(token) return navigate("/")
 },[])
  return <>{component}</>
  
}

export default PrivateRoute;