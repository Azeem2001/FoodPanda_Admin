import React from 'react'
import Resturant from '../../components/Resturant/Resturant'
import style from "./Home.module.scss"
const Home = () => {
  return (
    <div className={style.container}>
       <Resturant/>
    </div>
  )
}

export default Home