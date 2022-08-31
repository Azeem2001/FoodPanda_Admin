
import React from 'react'
import style from "./Resturant.module.scss"
import { Button } from '@mui/material'
const Resturant = () => {
  const logo = "/images/resturant_logo.png"
  return (
    <>
    <div className={style.Resturant_container}>
    <h1>Popular restaurants</h1>
   
     <div className={style.Resturant_Name}>
      <img src={logo} alt="Logo" />
      <h2>Karachi Resturant</h2>
      <Button  variant="contained" color="success">Go To My Resturant</Button>
     </div>
      
    </div>
    </>

  )
}

export default Resturant