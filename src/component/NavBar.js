import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/create">Create</NavLink>
      <NavLink to="/archive">Ar-Chives</NavLink>
      <NavLink to="/account">Account</NavLink>
    </nav>
    );
} 

export default NavBar;