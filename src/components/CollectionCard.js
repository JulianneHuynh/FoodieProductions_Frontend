import React from "react";

export default function CollectionCard({id, name, image, totalTime, serving, ingredients, instructions, handleDeleteRecipe}) {


  function deleteCard (){
    fetch(`/recipes/${id}`, 
    {method: "DELETE"})
      handleDeleteRecipe(id)
    }
  




  return(
    <li className='card'>
      <div className="name-recipe"><strong>{name}</strong></div>

      <img src={image}/>

      <div className="cooktime-recipe"><strong>Total Time:</strong> {totalTime}</div>

      <div className="yield-recipe"><strong>Serving:</strong> {serving}</div>

      <div className="ingredients"><strong>Ingredients:</strong> {ingredients}</div>

      <div className="instruction"><strong>Instructions:</strong>{instructions}</div>
      
      <button onClick={deleteCard} className="emoji-button delete">🗑</button> 
      </li>
  )
}