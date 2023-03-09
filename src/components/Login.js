import React, {useState, useContext} from "react";
import { UserContext } from "./Context/user";
import {useNavigate, Link} from 'react-router-dom';
import "./styles.css"

export default function Login() {

  document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/62dd7e7a0005ee6b7fe91846/1659896684599-7NFTEBKW8FVRV6DNAW84/AdobeStock_254631877.jpeg?format=1500w')";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'


  const {user, setUser} = useContext(UserContext)
  const [userData, setUserData] = useState({email:'',password:''})
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()
  const {email, password} = userData

  function onSubmit(e){
      e.preventDefault()
      const userLogin = {
                  email: userData.email,
                  password: userData.password
                  }
  
    fetch(`/login`,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(userLogin)
    })
    .then((res) => {
        if(res.ok){
            res.json().then(userinfo => {
            setUser(userinfo)
            navigate(`/account`)
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
     })
}
    


    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
  }

  return (
    <div className="login-container">
      <div className="card">
        <label>Log into Foodie Production</label>
        <form onSubmit={onSubmit} className='Form-login'>
          <br/>
              <input type="text" placeholder="Email address" name="email" value={email} onChange={handleChange}/><br/>
          
          {/* <label>Password</label> */}
          <br/>
              <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/><br/><br/>
          
          <input className='Button-signup' type='submit' value='Log in!' />
          <br/>
          

          <span className='account_link'>👨‍🍳<Link to='signup'>Sign Up Here!👨‍🍳</Link></span>
          

          
        </form>
        {errors&&<div>{errors}</div>}
        </div>
        </div>
  )}