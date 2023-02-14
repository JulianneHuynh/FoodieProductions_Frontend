import React, { useState, useEffect } from 'react';
import AccountList from "./AccountList";

export default function Account(){
  const [userDevises, setUserDevises]= useState([]);


  useEffect(()=> {
    fetch('http://localhost:3000/user_devises')
    .then (r=> r.json())
    .then (data => setUserDevises(data)) 
  },[])

  return (
    <div className="Account">
      <h1>jdlksajd</h1>
      <br/>
      <AccountList 
              userDevises={userDevises}/>
    </div>
  );
};

