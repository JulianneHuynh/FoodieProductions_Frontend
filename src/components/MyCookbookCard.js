import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function MyCookbookCard({id, title, coverImage, handleDeleteCookbook, recipes, handleDeleteRecipe}) {

  const [like, setLike]= useState(true)
  const [cooked, setCooked] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState(false)

  function handleOpenCookbook(){
    setRecipeDetails(recipeDetails => !recipeDetails)
    
  }

  function handleHeart(){
    setLike((prev)=> !prev)
  }

  function handleCooked(){
    setCooked((prev)=> !prev)
  }

  function deleteCookbookCard (){
    fetch(`/cookbooks/${id}`, 
    {method: "DELETE"})
      handleDeleteCookbook(id)
    }

    function deleteRecipeCard (){
      fetch(`/recipes/${id}`, 
      {method: "DELETE"})
        handleDeleteRecipe(id)
      }
  

  
    

   const recipeInfo = recipes.map((recipe) =>{
    return(
      <div>
   
   <div className="name-recipe"><strong>{recipe.name}</strong></div>
   <img className="food-photo" src={recipe.image}/>
   <br/>
   <div className="yield-recipe"><strong>Serving 👨‍🍳:</strong> {recipe.yield}</div>
   <div className="cooktime-recipe"><strong>Total Time ⏲️:</strong> {recipe.cook_time}</div>
   <div className="ingredients"><strong>🥥🥑🧀🥩 Ingredients 🥔🧄🌶️🥦</strong> <br/> {recipe.ingredients}</div>
   <div className="instruction"><strong>Instructions 📜</strong> <br/> {recipe.instructions}</div>

   <div className="heart-icon">
   {like ? (
          <div onClick={handleHeart} className="emoji-button favorite active">💖</div>
        ) : (
          <div onClick={handleHeart} className="emoji-button favorite">💔</div>
        ) }

<div className="x-icon">
      {cooked ? (
          <div onClick={handleCooked} className="emoji-button favorite active">🍲</div>
        ) : (
          <div onClick={handleCooked} className="emoji-button favorite">🥩</div>
        )}
      </div>
   <button onClick={deleteRecipeCard} className="emoji-button delete">Delete recipe 🗑</button> 
   </div>

   </div>
   )}) 
  
                
   




  return(
    <center>
      <div className="card-contaier">
    <li className='card'>
      <div className="name-recipe"><strong>{title}</strong></div>

    <div className="cookbook-image" >
      <img onClick= {handleOpenCookbook} src={coverImage}/>
      { recipeDetails ? recipeInfo : null}
     
    </div>
   
    <Link to="/create_recipe">
    <button className="emoji-button add">➕ Recipe</button> 
    </Link>

      <button onClick={deleteCookbookCard} className="emoji-button delete">Delete Cookbook 🗑</button> 

      </li>
      </div>
      </center>
  )
}