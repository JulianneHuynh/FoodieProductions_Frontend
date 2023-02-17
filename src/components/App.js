import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./styles.css";


import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
// import Archive from "./Archive";
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

        <Route path= "/create" element={<Create/>}/>
    
        {/* <Route path="/archive" element={<Archive/>}/> */}
      
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/account/" element={<Account/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/edit_account" element={<EditAccount/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route path= "*" element={<h1> Not Found </h1>}/>      
      </Routes>   
    </div>
)
}


export default App;




// import React, {useState} from 'react';
// import { Routes, Route } from "react-router-dom";
// import './App.css'


// import Header from "./Header";
// import Profile from "./Profile";


// import Login from './Login';



// function App() {


//   return (
//       <main className={theme}>
//         {/* wrap components that need access to context data in the provider*/}
//           <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
//           <Profile theme={theme} user={user} />
//       </main>
//   );
// }

// export default App;




// return (
//   <div className="app">
//    <Title />
//    <NavBar onChangePage={setPage} />
//     <Routes> 
//        <Route path="/sub" element={<Sub/>}/>

//        <Route path= "/library" element={<Library/>}/>
     
//        <Route path="/cohort" element={<Cohort/>}/>
         
//        <Route path="/addTerm" element={<AddTerm/>}/>
         
//        <Route path= "*" element={<h1> Not Found </h1>}/>
      
//     </Routes>   
       

//   </div>
// );