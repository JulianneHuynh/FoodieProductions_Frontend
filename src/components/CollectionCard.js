import React, { useState } from "react";

export default function CollectionCard({id, name, image, totalTime, serving, ingredients, instructions, handleDeleteRecipe}) {


  const [like, setLike]= useState(true)
  const [cooked, setCooked] = useState(false)

  function deleteCard (){
    fetch(`/recipes/${id}`, 
    {method: "DELETE"})
      handleDeleteRecipe(id)
    }

    
  function handleHeart(){
    setLike((prev)=> !prev)
  }

  function handleCooked(){
    setCooked((prev)=> !prev)
  }

  

  

  return(
    <center>
    <li className='card'>
      <div className="name-recipe"><strong>{name}</strong></div>

      <img src={image}/>

      <div className="cooktime-recipe"><strong>Total Time ⏲️:</strong> {totalTime}</div>

      <div className="yield-recipe"><strong>Serving 👨‍🍳:</strong> {serving}</div>

      <div className="ingredients"><strong>🥥🥑🧀🥩 Ingredients 🥔🧄🌶️🥦</strong> <br/> {ingredients}</div>

      <div className="instruction"><strong>Instructions 📜</strong> <br/> {instructions}</div>

      {/* <button onClick={moveRecipe} className="emoji-button-add">➕</button> */}
      <div className="heart-icon">
      {like ? (
          <div onClick={handleHeart} className="emoji-button favorite active" color="red">💖</div>
        ) : (
          <div onClick={handleHeart} className="emoji-button favorite">💔</div>
        )}
        </div>
        

        <div className="x-icon">
      {cooked ? (
          <div onClick={handleCooked} className="emoji-button favorite active">🍲</div>
        ) : (
          <div onClick={handleCooked} className="emoji-button favorite">🥩</div>
        )}
      </div>

      <button onClick={deleteCard} className="emoji-button delete">🗑</button> 
      {/* <button onClick={moveRecipe} className="emoji-button-add">➕</button> */}
      </li>
      </center>
  )
}