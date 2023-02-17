import React, {useState} from "react";

export default function Create() {
  const [recipeForm, setRecipeForm] = useState({
      recipeName:'',
      recipeDeveloper:'',
      cookTime:'',
      photo:'',
      ingredients:'',
      instructions:'',
      })

  const [errors, setErrors] = useState([])
  // const navigate = useNavigate()

  const { recipeName, recipeDeveloper, cookTime, photo,  ingredients, instructions } = recipeForm

  function onSubmit(e){
    alert('Recipe Created!');
    e.preventDefault()
    const newRecipe = {
      title: recipeName,
      author: recipeDeveloper,
      cook_time: cookTime,
      image: photo,
      ingredients: ingredients,
      instructions: instructions,
    }

  //   fetch(`/recipe_create`,{
  //     method:'POST',
  //     headers:{'Content-Type': 'application/json'},
  //     body:JSON.stringify(newRecipe)
  //   })
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(recipeData => {
  //         navigate(`/archive/${recipeData.id}`)
  //       })
  //     }else {
  //       res.json().then(json => setErrors(Object.entries(json.errors)))
  //     }
  //   })

  }

  const handleChange = (e) => {
    const { name, value } =e.target
    setRecipeForm({ ...recipeForm, [name]: value})
  }

  return (
    <><br/>
    <form onSubmit={onSubmit}>
        <div class="form-group">
        <label>Name of Recipe 🍽️</label><br/>
          <input type="text" class="form-control" id="recipeName" value={recipeName} onChange={handleChange} /><br/>
        </div>

        <div class="form-group">
        <label>Recipe Developer 👨‍🍳</label><br/>
          <input type="text" class="form-control" id="recipeDeveloper" value={recipeDeveloper} onChange={handleChange}/><br/>
        </div>

        <div class="form-group">
        <label>Total Time ⏲️</label><br/>
          <input type="text" class="form-control" id="cookTime" placeholder="00hr 00min" value={cookTime} onChange={handleChange}/><br/>
        </div>

        <div class="form-group">
        <label>Photo 🖼️</label><br/>
          <input type="text" class="form-control" id="photo" value={photo} onChange={handleChange}/><br/>
        </div>

        <div class="form-group">
          <label>🥥🥑🧀🥩 Ingredients 🥔🧄🌶️🥦</label><br/>
          <textarea class="form-control" id="ingredients" rows="5" value={ingredients} onChange={handleChange}></textarea><br/>
        </div>

        <div class="form-group">
          <label>Instructions 📜 </label><br/>
          <textarea class="form-control" id="instructions" rows="5" value={instructions} onChange={handleChange}></textarea><br/>
        </div>
        <input type= 'submit' value ='Save Recipe!' />
      </form>
    </>

  )
}