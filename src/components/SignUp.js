import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {UserContext} from "./Context/user"


export default function SignUp() {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg')";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'

  const {user, setUser} = useContext(UserContext)
  const [errors, setErrors] = useState(null)
  const [userData, setUserData] = useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      image:''
  })
  
  const navigate = useNavigate()

  // const {firstName, lastName, email, password, image} = userData

  function onSubmit(e){
    alert('Account Created!');
    e.preventDefault()
    const newUserInfo = {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      password: userData.password,
      image: userData.image
    }
    setErrors(null)
// console.log(newUserInfo)
    fetch(`/signup`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newUserInfo)
    })
    .then(res => {
      if(res.ok){
        res.json().then(userData => {
          setUser(userData)
          navigate(`/account`)
        })
      }else {
        res.json().then(errorInfo => setErrors((errorInfo.errors)))
      }
    })

  }

  const handleChange = (e) => {
    const { name, value } =e.target
    setUserData({ ...userData, [name]: value})
  }
  return (
    <center><div className='card'>
    <>
    <form onSubmit={onSubmit} className='Signup-form'>

      <label>First Name</label><br/>
        <input type='text' name='firstName' value={userData.firstName} onChange={handleChange} /><br/>

      <label>Last name</label><br/>
        <input type='text' name='lastName' value={userData.lastName} onChange={handleChange} /><br/>

      <label>Email</label><br/>
        <input type="text" name="email" value={userData.email} onChange={handleChange}/><br/>

      <label>Password</label><br/>
        <input type='password' name='password' value={userData.password} onChange={handleChange}/><br/>

      <label>Profile Photo</label><br/>
        <input type='text' name='image' value={userData.image} onChange={handleChange}/><br/><br/>

      <button type= 'submit'>Sign Up!</button>
    </form>
    {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
    </>
    </div>
    </center>
  )
}
