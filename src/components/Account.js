import React, {useState, useContext} from 'react';
import {UserContext} from './Context/user';
import {useNavigate, Link} from 'react-router-dom';
// import {Link} from "react-router-dom";

export default function Account() {
  const {user, setUser} = useContext(UserContext);
  const [editAccount, setEditAccount] = useState(false);
  const [errors, setErrors] = useState([]);
//   const [userEdit, setUserEdit] = useState({
//     first_name: user.first_Name,
//       last_name: user.last_Name,
//       email: user.email,
//       password: user.password,
//       image: user.image
//   })
  const navigate = useNavigate()

  function handleEditAccount(){
      setEditAccount((editAccount) => !editAccount)
  }

//   const handleChange = (e) => {
//     const { name, value } =e.target
//     setUserEdit({ ...userEdit, [name]: value})
//   }

//   function onSubmit(e) {
//       e.preventDefault()
//       setErrors([])
//       fetch(`/edit/${user.id}`,{
//           method: "PATCH",
//           headers: {"Content-Type": 'application/json'},
//           body: JSON.stringify(userEdit)
//       })
//       .then((res) => {
//           if (res.ok) {
//               res.json().then((accountUpdated)=> {
//                   setEditAccount((editAccount) => !editAccount)
//                   setUser(accountUpdated)
//               })
//           }else {
//               res.json().then((error) => (setErrors(error.errors)))
//           }
//       })
//   }
  function deleteAccount () {
      setErrors([])
      fetch(`/deactivate/${user.id}`, {
          method: "DELETE",
      })
      .then((res) => {
          if (res.ok) {
              setUser(null)
               navigate("/signup")
          } else {
              res.json().then((errors) => (setErrors(errors.error)))
          }
      })
  }

  function handleLogout(){
    fetch(`/logout`, {
        method: "DELETE"
    })
    .then((res) => {
        if (res.ok){
            setUser(null)
            navigate(`/`)
        }
    })

  }

  return (
    <div className='Account'>

        <div className='image-account'>
            <img src={user.image} alt=''/>
        </div>
    
        <div className='title-account'>
            <h1>{user.first_name} {user.last_name}</h1>
        </div>

        <div className='email-account'>
            <h3>{user.email}</h3>
        </div>
        
        <div className='password-account'>
            <h3>{user.password}</h3>
        </div>

        <div className='edit-button'>
            <button>
            <Link className='edit-link' type='button' to="/edit_account">Edit Account</Link>
            </button>
        </div>

        <div className='logout-button'>
            <button onClick={handleLogout}>Logout</button>
        </div>

        <div className='delete-button'>
             <button type='button' onClick={deleteAccount}>Deactivate Account</button>
        </div>




{/* 
        <div className='card-account'>
            <form onSubmit={onSubmit} className='account-form'>
                <div className='edit-profile'>
                    {editAccount ?
                        <div className='edit-button'>
                            <button type='submit'>Save Changes</button></div> : <button type='button' onClick={handleEditAccount}>Edit Profile</button>} <br/>


                <div type='edit-form'>
                    <label>First Name</label><br/>
                        <input type='text' name='firstName' value={user.firstName} onChange={handleChange} /><br/>

                    <label>Last name</label><br/>
                        <input type='text' name='lastName' value={user.lastName} onChange={handleChange} /><br/>

                    <label>Email</label><br/>
                        <input type="text" name="email" value={user.email} onChange={handleChange}/><br/>

                    <label>Password</label><br/>
                        <input type='password' name='password' value={user.password} onChange={handleChange}/><br/>
                        
                    <label>Photo</label><br/>
                        <input type='text' name='image' value={user.image} onChange={handleChange}/><br/><br/>
                </div>
                </div>
            </form>
    </div> */}
  </div>
  )
}