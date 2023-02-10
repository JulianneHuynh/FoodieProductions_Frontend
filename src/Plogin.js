// import React, { useState, useEffect } from 'react'
// import './App.css'
 

// const baseUrl = 'http://127.0.01:3000/'
// const loginUrl = baseUrl + 'login'
// function App() {

//   useEffect( () => {
//     if ( localStorage.uid )
//       console.log("User found:", localStorage.uid )
//     else 
//       console.log("No user info found.")
//     }, [])
    
//     fetch( loginUrl, {
//       method: 'POST',
//         headers: {
//           'Content-type': 'application/json', 
//           Accept: 'application/json'
//         },
//         body: JSON.stringify({
//           email: 'teddy@yahoo.com',
//           password: 'Testing_1234'
//         })})
//         .then( r => r.json() )
//         .then( user => localStorage.uid = user.iud )

//   return (
//   <div className ="App">
//     <header className ="App-header">
//       ghjghjghjghjg
//     </header>
//   </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
