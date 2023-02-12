import React,  {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import {Form} from '../styled/Form'

function SignUp() {
  const [formData, setFormData] = useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const {firstName, lastName, email, password} = formData

  function onSubmit(e){
    e.preventDefault()
    const user = {
      firstName,
      lastName,
      email, 
      password 
    }

    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          navigate(`/users/${user.id}`)
        })
      }else {
        res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    })

  }

  const handleChange = (e) => {
    const { email, value } =e.target
    setFormData({ ...formData, [email]: value})
  }
  return (
    <>
    <form onSubmit={onSubmit}>

      <label>
        first name
      </label>
      <input placeholder='John' type='text' legal_name='firstName' value={firstName} onChange={handleChange} />

      <label>
        last name
      </label>
      <input placeholder='Smith' type='text' legal_name='lastName' value={lastName} onChange={handleChange} />

      <label>
        Email
      </label>
      <input placeholder='JohnSmith123@gmail.com' type='text' email='email' value={email} onchange={handleChange} />

      <label>
        Password
      </label> 
      <input type='text' password='password' value={password} onChange={handleChange} />

      <input type= 'submit' value ='Sign Up!' />
    </form>
    {errors&&<div>{errors}</div>}
    </>
  )
}

export default SignUp;