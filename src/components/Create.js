import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

export default function Create() {
  const [recipe, setRecipe] = useState('')
  const [recipeName, setRecipeName] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [photo, setPhoto] = useState('')
  const [serving, setServing] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instruction, setInstruction] = useState('')
  const [errors, setErrors] =useState('')

  const navigate = useNavigate();

  // const { recipeName, recipeDeveloper, cookTime, photo,  ingredients, instructions } = recipeForm

  function handleRecipeSubmit(e){
    alert('Recipe Created!');
    e.preventDefault()
    const newRecipeInfo = {
      name: recipeName,
      image: photo,
      yield: serving,
      cook_time: cookTime,
      ingredients: ingredients,
      instructions: instruction,
    }
    setErrors(null)

    fetch(`/recipes`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newRecipeInfo)
    })
    .then(res => {
      if(res.ok){
        res.json().then(recipeData => {
          setRecipe(recipeData)
          navigate(`/collection`)
        })
      }else {
        res.json().then(errorInfo => setErrors((errorInfo.errors)))
      }
    })

  }

  // const handleChange = (e) => {
  //   const { name, value } =e.target
  //   setNewRecipeInfo({ ...recipeinfo, [name]: value})
  // }

  return (
    <><br/>
    <center><form onSubmit={handleRecipeSubmit} id="form-container">
        <div className="Recipe-form" >
          
        <label><strong>Name of Recipe 🍽️</strong></label><br/>
          <input type="text" class="form-control" id="recipeName" value={recipeName} onChange={e => setRecipeName(e.target.value)} /><br/>
        </div>

        <div class="form-group">
        <label><strong>Photo 🖼️</strong></label><br/>
          <input type="text" class="form-control" id="photo" value={photo} onChange={e => setPhoto(e.target.value)} /><br/>
        </div>

        <div class="form-group">
        <label><strong>Serving 👨‍🍳</strong></label><br/>
          <input type="text" class="form-control" id="recipeyield" value={serving} onChange={e => setServing(e.target.value)} /><br/>
        </div>

        <div class="form-group">
        <label><strong>Total Time ⏲️</strong></label><br/>
          <input type="text" class="form-control" id="cookTime" placeholder="00hr 00min" value={cookTime} onChange={e => setCookTime(e.target.value)} /><br/>
        </div>

        <div class="form-group">
          <label><strong>🥥🥑🧀🥩 Ingredients 🥔🧄🌶️🥦</strong></label><br/>
          <textarea class="form-control" id="ingredients" rows="5" value={ingredients} onChange={e => setIngredients(e.target.value)} ></textarea><br/>
        </div>

        <div class="form-group">
          <label><strong>Instructions 📜</strong></label><br/>
          <textarea class="form-control" id="instructions" rows="5" value={instruction} onChange={e => setInstruction(e.target.value)} ></textarea><br/>
        </div>
        <input type= 'submit' value ='Save Recipe!' />
      </form>
      </center>
    </>

  )
}