import React from 'react';
import { Routes, Route } from "react-router-dom";

import "./styles.css";

import NavBar from "./NavBar";
import Home from "./Home";

import StartHere from './StartHere';
import CreateCookbook from './CreateCookbook';
import CreateRecipe from "./CreateRecipe";


// import Archive from "./Archive";
import MyCookbook from "./MyCookbook"
import Collection from "./Collection";

import Profile from './Profile';
import Account from './Account';
import EditAccount from './EditAccount';
import SignUp from './SignUp';
import Login from './Login.js';
// import Logout from './Logout';


function App() {
  document.body.style.backgroundColor = "rgb(201, 231, 219)" 
  
  return (
    <div className="app">
    <NavBar/>
      <Routes path="/" component={<Login/>}> 
        <Route path="/home" element={<Home/>}/>

        <Route path= "/start_here" element={<StartHere/>}/>
        <Route path= "/create_cookbook" element={<CreateCookbook/>}/>
        <Route path= "/create_recipe" element={<CreateRecipe/>}/>
    
        {/* <Route path="/archive" element={<Archive/>}/> */}
        <Route path="/my_cookbooks" element={<MyCookbook/>}/>
        <Route path="/collection" element={<Collection/>}/>
      
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/account/" element={<Account/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/edit_account" element={<EditAccount/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path= "*" element={<h1> Not Found </h1>}/>      
      </Routes>   
    </div>
)
}


export default App;