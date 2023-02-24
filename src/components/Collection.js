import React, {useState, useEffect} from "react";
import CollectionList from "./CollectionList";

import "./Archive.css";


export default function Collection() {

  // document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/62dd7e7a0005ee6b7fe91846/1659896684599-7NFTEBKW8FVRV6DNAW84/AdobeStock_254631877.jpeg?format=1500w')";
  // document.body.style.backgroundRepeat = "no-repeat"
  // document.body.style.backgroundSize = 'cover'
 
  const [recipes, setRecipes] = useState([])
 

  useEffect(() => {
    fetch(`/recipes`)
    .then(res=> res.json())
    .then (recipeArray => setRecipes(recipeArray))
  }, []);

  function handleDeleteRecipe(recipeId){
    const newRecipeArray = recipes.filter((recipe)=>recipe.id !== recipeId)
    setRecipes(newRecipeArray)
  }


  return (
    <div className="Collection">

      <div id="logo-collection">
        {/* <img className="title-archive" src="https://thumbs.gfycat.com/SmugCarefulDutchshepherddog-size_restricted.gif"/> */}
          <label className="title-archive"> Recipe Ar-Chives </label>
        <img className="logo-archive" src="https://4.bp.blogspot.com/-OT3bzBnyIBE/XdjFVBpl0OI/AAAAAAAWTjo/2OC5lktiL0cmxTTN8lH3dXH2jFEdkiBjwCLcBGAsYHQ/s1600/AW4046268_22.gif"/>
        </div>
        <CollectionList
            recipes={recipes}
            handleDeleteRecipe={handleDeleteRecipe}/>
      </div>
  );
}

