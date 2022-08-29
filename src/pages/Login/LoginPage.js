import React from 'react'
import Login from '../../components/Email/Login'
import style from "./Login.module.scss"
const LoginPage = () => {
  return (
    <div className={style.Login_container}>
      <Login/>
    </div>
  )
}

export default LoginPage