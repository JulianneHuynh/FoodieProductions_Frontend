import React, {useState, useEffect} from "react";
import MyCookbookList from "./MyCookbookList";

export default function MyCookbook() {
  document.body.style.backgroundImage = "url('https://masureel.com/site/assets/files/22226/goj703_g.jpg')";

  const [recipes, setRecipes] = useState([])
  const [cookbooks, setCookbooks] = useState([])

  useEffect(() => {
    fetch(`/cookbooks`)
    .then(res=> res.json())
    .then (cookbookArray => setCookbooks(cookbookArray))
  }, []);


  function handleDeleteCookbook(cookbookId){
    const newCookbookArray = cookbooks.filter((cookbook)=>cookbook.id !== cookbookId)
    setCookbooks(newCookbookArray)
  }

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
<>
<br/>
  <center>
<div className="MyCookbook">

  <img className="logo-archive" src="https://lookadindia.com/haldiram's/images/home/cookbook.gif"/>

  <div id="logo-mycookbook">
    <label className="title-MyCookbook">My Cookbooks</label>
  </div>
  <MyCookbookList
      cookbooks={cookbooks}
      handleDeleteCookbook = {handleDeleteCookbook}
      handleDeleteRecipe = {handleDeleteRecipe}/>
</div>
</center>

</>
)
}