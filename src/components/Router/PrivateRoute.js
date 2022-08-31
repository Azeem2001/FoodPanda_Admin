import { Login } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const PrivateRoute = ({component}) => {
let navigate = useNavigate()    
 useEffect(()=>{
    let token = localStorage.getItem("token")
    console.log(token)
     if(!token) return navigate("/loginPage")
 },[])
  return <>{component}</>
  
}

export default PrivateRoute