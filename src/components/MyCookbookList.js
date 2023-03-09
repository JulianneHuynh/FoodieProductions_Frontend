import React, {useState} from "react";
import Search from './Search';
import MyCookbookCard from "./MyCookbookCard"

export default function MyCookbookList({cookbooks, handleDeleteCookbook, handleDeleteRecipe}){

  const [search, setSearch] = useState('')

  const searchCookbook = cookbooks.filter((cookbook)=> {
    return cookbook.title?.toLowerCase().includes(search.toLowerCase())
  })

  console.log(cookbooks[0])
  const cookbookCard = searchCookbook.map(cookbook => {
    return ( 
    <MyCookbookCard
      key={cookbook.id}
      id={cookbook.id}
      title={cookbook.title}
      coverImage={cookbook.cover_image}
      handleDeleteCookbook={handleDeleteCookbook}
      handleDeleteRecipe={handleDeleteRecipe}
      recipes={cookbook.recipes}
      />
      )
    })

  return(
    <center>
    <div className="search-cookbook"> 
      <Search 
        search={search}
        setSearch={setSearch}
        />
   
      <div className="cards">
        {cookbookCard}
      </div>
    </div>
    </center>
  )
}