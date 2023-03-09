import React from "react";
import  {Link} from 'react-router-dom';
import "./start.css";

export default function StartHere() {
  document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/373/952/839/wooden-spoon-condiments-background-wallpaper-preview.jpg')";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'


  return (
    <div className="Start-Here-container">

      <center>
        <div className='Start-Here-title'>
        <h1><strong>Begin Creating</strong></h1>
        
        
        </div>
      </center>
      <br/>
      <br/>

      <div className='btn-group'>
        
        <div className="card">
        <h3> Create a Cookbook</h3>
        <button>
        <Link className="cookbook-form-link" type="img" to="create_cookbook">
        <img className="img-book" src="https://tastecooking.com/wp-content/uploads/2021/04/Article-Cooking-Through-Cookbook.gif"/>
        </Link>
        </button>
        </div>
        
      </div>

      <div className="card">
        <h3> Create a Recipe</h3>
        <button>
        <Link className="recipe-form-link" type="img" to="/create_recipe">
        <img className="img-recipe" src="https://static.wixstatic.com/media/ed8e7a_8a3b0b5b02bf4190b12edaafe79eff59~mv2.gif"/>
        </Link>
        </button>
      </div>

      <center>
      <div className="Start-Here-or">
      <h2><strong>----- OR -----</strong></h2>
      </div>
      </center>

      {/* <div className='Start-Here-recipe'>
        
        <div className="card">
        <h3> Create a Recipe</h3>
        <img className="img-recipe" src="https://static.wixstatic.com/media/ed8e7a_8a3b0b5b02bf4190b12edaafe79eff59~mv2.gif"/>
        </div>
        
      </div> */}

    </div>
  )
}