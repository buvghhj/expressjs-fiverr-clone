import React, { useState } from "react"
import "./Login.scss"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import axios from 'axios'
import newRequest from "../../utils/newRequest.js"
import { useNavigate } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

   try {

     const res = await newRequest.post("/auth/login", {username, password})

     localStorage.setItem("currentUser", JSON.stringify(res.data))

     navigate("/") 

   } catch (err) {

    setError(err.response.data.message)

   }

  }

  return (
  <>

     <div className="login">

     <form onSubmit={handleSubmit} >

      <h1>Đăng nhập</h1>

      <label htmlFor="">Tài khoản</label>

      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="">Mật khẩu</label>

      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      
       <p style={{ color:"red" }} >{error && error}</p>
       
      <button type="submit">Đăng nhập</button>
      
     </form>

  </div>


  </>
  )
}

export default Login