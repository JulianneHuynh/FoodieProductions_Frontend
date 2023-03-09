import React, {useState, useEffect} from "react";
import CollectionList from "./CollectionList";

import "./Archive.css";


export default function Collection() {
  document.body.style.backgroundImage = "url('https://masureel.com/site/assets/files/22226/goj703_g.jpg')";

  const [recipes, setRecipes] = useState([])
  const [cookbook, setCookbook] = useState([])
 

  useEffect(() => {
    fetch(`/recipes`)
    .then(res=> res.json())
    .then (recipeArray => setRecipes(recipeArray))
  }, []);

  function handleDeleteRecipe(recipeId){
    const newRecipeArray = recipes.filter((recipe)=>recipe.id !== recipeId)
    setRecipes(newRecipeArray)
  }

  const addRecipeToCookbook = ( recipe ) => {
    // console.log('I clicked a recipe:', recipe.name)
    if ( !cookbook.includes( recipe.id ) )
      setCookbook([...cookbook, recipe.id])
  }

  return (
    <center>
    <div className="Collection">

      <div id="logo-collection">
          <label className="title-archive"> Recipe Ar-Chives </label>
        <img className="logo-archive" src="https://4.bp.blogspot.com/-OT3bzBnyIBE/XdjFVBpl0OI/AAAAAAAWTjo/2OC5lktiL0cmxTTN8lH3dXH2jFEdkiBjwCLcBGAsYHQ/s1600/AW4046268_22.gif"/>
        </div>
        <CollectionList
            recipes={recipes}
            addRecipeToCookbook ={addRecipeToCookbook}
            handleDeleteRecipe={handleDeleteRecipe}/>
      </div>
      </center>
  );
}

