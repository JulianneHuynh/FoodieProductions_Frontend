import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import {UserContext} from './Context/user';
import "./styles.css"

export default function CreateRecipe() {
  document.body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/045/438/541/original/priya-rai-food-gif-1.gif?1642708100)";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'

  // const { id } = useParams()

  const [book, setBook] = useState('')
  const [cookbooks, setCookbooks] = useState([])
  const [recipes, setRecipes] = useState('')
  const [recipeName, setRecipeName] = useState('')
  const [cookTime, setCookTime] = useState('')
  const [photo, setPhoto] = useState('')
  const [serving, setServing] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instruction, setInstruction] = useState('')
  const [errors, setErrors] =useState('')

  const navigate = useNavigate();

  useEffect(() => fetchCookbooks(), [])
  function fetchCookbooks() {
    fetch("/cookbooks")
    .then(res => res.json())
    .then(setCookbooks)
  }


  function handleRecipeSubmit(e){
    alert('Recipe Created!')
    e.preventDefault()
    const newRecipeInfo = {
      cookbook_id: book,
      name: recipeName,
      image: photo,
      yield: serving,
      cook_time: cookTime,
      ingredients: ingredients,
      instructions: instruction,
    }
    setRecipes(newRecipeInfo)
    setErrors(null)

    fetch(`/recipes`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newRecipeInfo)
    })
    .then(res => {
      if(res.ok){
        res.json().then(recipeData => {
          setRecipes(recipeData)
          navigate(`/my_cookbooks`)
        })
      }else {
        res.json().then(errorInfo => console.log(errorInfo.errors))
      }
    })

  }

  function cookbookId(e){
    setBook(e.target.value)


  }

  //   const addRecipe = (newRecipe) => {
  //   setRecipes((recipes) => [...recipes, newRecipe])
  // }



  return (
    <><br/>

    <div>
    <center>

    <label for="cookbooks" className="cookbook-options" id="cookbooks"></label>
      <select onChange={cookbookId} name="cookbooks" id="cookbookDropdown">
        <option>Which Cookbook?</option>
        {cookbooks.map (cookbook =>
          <option id="fontTest" key={cookbook.id} value={cookbook.id}>{cookbook.title}</option>
          )}
      </select>
      <br/>
      <br/>
      <form onSubmit={handleRecipeSubmit} id="form-container">
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
      </div>
    </>

  )
}