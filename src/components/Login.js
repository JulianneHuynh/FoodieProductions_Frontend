import React, {useState, useContext} from "react";
import { UserContext } from "./Context/user";
import {useNavigate} from 'react-router-dom';

export default function Login() {
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
      <>
        <form onSubmit={onSubmit} className='Form-login'>
          <label>Email</label><br/>
              <input type="text" name="email" value={email} onChange={handleChange}/><br/>
          
          <label>Password</label><br/>
              <input type="password" name="password" value={password} onChange={handleChange}/><br/><br/>
          
          <input className='Button-signup' type='submit' value='Log in!' />
        </form>
        {errors&&<div>{errors}</div>}
    </>
  )}