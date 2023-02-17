import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className ="Title">Foodie Productions</div> 
      <img className="title-logo" src="/images/icon.png" alt=''/>
          <button 
            className="navbar-toggler" 
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span>
          </button>
          
            <div className="collapse navbar-collapse"id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">

                <li class="nav-item">
                  <Link class="nav-link" to="/home">Home <span class="sr-only"></span></Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/create">Create Recipe</Link>
                </li>

                <li class="nav-item dropdown">
                  <Link 
                    class="nav-link dropdown" 
                    to="archive"  id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Ar-Chives
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Creations</a>
                    <a class="dropdown-item" href="#">Collection</a>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <Link 
                    class="nav-link dropdown-hover" 
                    to="/account" id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Profile
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/account">Account</Link>
                    <Link class="dropdown-item" to="/signup">Sign Up</Link>
                    <Link class="dropdown-item" to="/">Sign In</Link>
                  </div>
                </li>
              </ul>
            </div>
    </nav>
    
    );
} 

export default NavBar;