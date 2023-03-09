import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className ="Title">Foodie Productions</div> 
      <img className="title-logo" src="https://media.tenor.com/CE3zS1_InDQAAAAC/chef-cooking.gif" alt=''/>
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
                    to="start_here"  id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Start Here
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="create_cookbook">Create Cookbook</Link>
                    <Link class="dropdown-item" to="create_recipe">Create Recipe</Link>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown" 
                    to="archive"  id="navbarDropdown" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
                    Ar-Chives
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="my_cookbooks">My Cookbooks</Link>
                    <Link class="dropdown-item" to="collection">Collection</Link>
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