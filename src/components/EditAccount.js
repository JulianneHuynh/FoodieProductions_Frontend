import React, {useState, useContext} from "react";
import {UserContext} from "./Context/user";
import { useNavigate } from "react-router-dom";

export default function EditAccount() {

  document.body.style.backgroundImage = "url('https://media01.stockfood.com/largepreviews/MzgyNDg1NTY0/12338244-Wooden-cutting-board-background-with-seasoning-herbs-and-kitchen-knife-on-wooden-background.jpg')";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'
  
  const {user, setUser} = useContext(UserContext)
  const [errors, setErrors] = useState([]);
  const [userEdit, setUserEdit] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate()

    function onSubmit(e) {
      e.preventDefault()
      setErrors([])
      fetch(`/users/${user.id}`,{
          method: "PATCH",
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify({
                first_name: firstName, 
                last_name: lastName, 
                email: email, 
                password: password,
                image: image
                })
      })
      .then((res) => {
          if (res.ok) {
              res.json().then((saveChanges)=> {
                  setUser(saveChanges)
                  navigate(`/account`)
              })
          }else {
              res.json().then((error) => (setErrors(error.errors)))
          }
      })
  }

  const handleChangeFirstName = (e) => {
     setFirstName(e.target.value)
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeImage = (e) => {
    setImage(e.target.value)
  }

  return(
    <div>
      <h1>Edit Account</h1>


      <form onSubmit={onSubmit} className='edit-form'>
          
                    <label>First Name</label><br/>
                        <input type='text' name='firstName' value={firstName} onChange={handleChangeFirstName} /><br/>

                    <label>Last name</label><br/>
                        <input type='text' name='lastName' value={lastName} onChange={handleChangeLastName} /><br/>

                    <label>Email</label><br/>
                        <input type="text" name="email" value={email} onChange={handleChangeEmail}/><br/>

                    <label>Password</label><br/>
                        <input type='password' name='password' value={password} onChange={handleChangePassword}/><br/>
                        
                    <label>Photo</label><br/>
                        <input type='text' name='image' value={image} onChange={handleChangeImage}/><br/><br/>
                
                <button type='submit'>Save Changes</button>
            </form>
      </div>
  )
}