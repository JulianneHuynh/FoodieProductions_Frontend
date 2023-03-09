import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context/user";

export default function CreateCookbook(){
  document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/ingredients-cooking-gray-concrete_127032-2082.jpg?w=2000')";
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'

  const {user, setUser} = useContext(UserContext)
  // const [recipe, setRecipe] = useState('')
  const [cookbook, setCookbook] = useState('')
  const [title, setTitle] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [errors, setErrors] =useState('')


  const navigate = useNavigate();

  function handleCookbookSubmit(e){
    // alert('Cookbook Created!');
    e.preventDefault()
    const newCookbookInfo = {
      user_id: user.id,
      // recipe_id: recipe.id,
      title: title,
      cover_image: coverImage,
    }
    setErrors(null)

    fetch(`/cookbooks`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newCookbookInfo)
    })
    .then(res => {
      if(res.ok){
        res.json().then(cookbookData => {
          setCookbook(cookbookData)
          navigate(`/my_cookbooks`)
        })
      }else {
        res.json().then(errorInfo => setErrors((errorInfo.errors)))
      }
    })

  }


  return(
<><br/>
    <center><form onSubmit={handleCookbookSubmit} id="form-container">
        <div className="Recipe-form" >
          
        <label><strong>Cookbook Title 📚</strong></label><br/>
          <input type="text" class="form-control" id="coookbookTitle" value={title} onChange={e => setTitle(e.target.value)} /><br/>
        </div>

        <div className="form-group">
        <label><strong>Photo 🖼️</strong></label><br/>
          <input type="text" class="form-control" id="photo" value={coverImage} onChange={e => setCoverImage(e.target.value)} /><br/>
        </div>

        <input type= 'submit' value ='Save Cookbook!' />
      </form>
      </center>
    </>
  )
}