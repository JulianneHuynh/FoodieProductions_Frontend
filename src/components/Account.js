import React, {useState, useContext} from 'react';
import {UserContext} from './Context/user';
import {useNavigate, Link} from 'react-router-dom';
// import {Link} from "react-router-dom";

export default function Account() {

    document.body.style.backgroundImage = "url('http://cdn.shopify.com/s/files/1/1728/9189/products/teak_cutting_board_stock1.01_1200x1200.jpg?v=1624477680')";
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = 'cover'
    
  const {user, setUser} = useContext(UserContext);
  const [editAccount, setEditAccount] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate()

  function handleEditAccount(){
      setEditAccount((editAccount) => !editAccount)
  }



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
    <div className='Account-Page'>
            <div className='Account-container'>

        <div className='card'>

        <div className='title-account'>
            <h1>{user.first_name} {user.last_name}</h1>
        </div>

        <div >
            <img className='image-account' src={user.image} />
        </div>

        <div className='email-account'>
            <h3>Email:{user.email}</h3>
        </div>
        
        <div className='password-account'>
            <h3>{user.password}</h3>
        </div>

        <div className="btn-group">
        <div className='edit-button'>
            <button>
            <Link className='edit-link' type='button' to="/edit_account">Edit </Link>
            </button>
        </div> <br/>

        <div className='logout-button'>
            <button onClick={handleLogout}>Logout</button>
        </div><br/>

        <div className='delete-button'>
             <button type='button' onClick={deleteAccount}>Deactivate</button><br/>
        </div>
        </div>
        </div>
        </div>
        </div>
       
  )}
