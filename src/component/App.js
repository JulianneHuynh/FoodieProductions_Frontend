import { Routes, Route } from "react-router-dom";
import "./styles.css";


import NavBar from "./NavBar";

import Login from "./Login";
import Home from "./Home";
// import Create from "./Create";
// import Archive from "./Archive";
import Account from './Account';


function App() {
  document.body.style.backgroundColor = "rgb(201, 231, 219)"

  return (
    <div className="app">
    <NavBar/>
      <Routes> 
        <Route path="/" exact={<Login/>}/>
        <Route path="/home" element={<Home/>}/>

        {/* <Route path= "/create" element={<Create/>}/> */}
    
        {/* <Route path="/archive" element={<Archive/>}/> */}
      
        <Route path="/account" element={<Account/>}/>
        
        <Route path= "*" element={<h1> Not Found </h1>}/>        
      </Routes>   
    </div>
  );
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