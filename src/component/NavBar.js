import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
import $ from "jquery";


const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className ="Title">Foodie Productions</div> 
      <img className="title-logo" src="/images/icon.png"/>
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

                <li class="nav-item dropdown">
                  <Link 
                    class="nav-link dropdown" 
                    to="/create" id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Create Recipe
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Create Cookbook</a>
                    <a class="dropdown-item" href="#">Create Recipe Box</a>
                  </div>
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
                    <a class="dropdown-item" href="#">Account</a>
                    <a class="dropdown-item" href="#">Sign Out</a>
                  </div>
                </li>
              </ul>
            </div>

      <div className = "NavBar">
      {/* <Link exact path to ="/home">Home</Link> */}
      {/* <Link exact path to ="/create">Create</Link> */}
      {/* <Link exact path to ="/archive">Ar-Chives</Link> */}
      {/* <Link exact path to ="/account">Account</Link> */}
      </div>
    </nav>
    
    );
} 

export default NavBar;