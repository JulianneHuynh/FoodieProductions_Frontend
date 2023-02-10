import React, {useState} from 'react'
import { Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router'
import SignUp from "./SignUp";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] =useState([])
    const history = useHistory()


    function handleLoginSubmit(e){
        e.preventDefault()
        const user = {
            email, 
            password
        }
        
        fetch(`/login`, {
            method:'POST',
            header:{'Content-Type': 'application/json'}, 
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/account/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    const handleChange = (e) => {
        const { email, value } = e.target
        setFormData({...formData, [email]:value })
    }
    return (
      <section className="login-form">
        <form onSubmit={handleLoginSubmit}>

        <label htmlFor="email">Email</label>
        <input 
            placeholder='Email'
            type='text' 
            name='email' 
            value={email}
            onChange={e => setEmail(e.target.value)} />
        
        <label htmlFor="password">Password</label>
        <input 
            placeholder='Password' 
            type='text' name='password' 
            value={password} 
            onChange={e => setPassword(e.target.value)} />

        <button className='loginSubmit' type='submit'>Login!</button>

        <Switch>
        <Route path="/signup" element={<SignUp/>}/>
        </Switch>

        </form>
        {errors&&<div>{errors}</div>}
      </section>
    );
};

export default Login;