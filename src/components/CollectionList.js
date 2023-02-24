import React, {useState} from "react";
import Search from './Search';
import CollectionCard from "./CollectionCard"
import "./styles.css";

function CollectionList({recipes, handleDeleteRecipe}) {  

  const [search, setSearch] = useState('')

  const searchRecipe = recipes.filter((recipe)=> {
    return recipe.name?.toLowerCase().includes(search.toLowerCase())
  })

  const recipeCard = searchRecipe.map(recipe => {
    return ( 
    <CollectionCard
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      image={recipe.image}
      totalTime={recipe.cook_time}
      serving={recipe.yield}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      handleDeleteRecipe={handleDeleteRecipe}
      />
      )
    })

  return (
    <div className="search-recipe"> 
      <Search 
        search={search}
        setSearch={setSearch}
        />

      <div className="cards">
        {recipeCard}
      </div>
    </div>
  );
  }

  export default CollectionList;
