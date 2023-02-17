import React, {useState} from "react";

export default function AccountCard({id, firstName, lastName, image, email, password, handleEditCard}){

  // function editCard(){
  //   fetch(`http://localhost:3000/user/${id}`,
  //   {method: 'EDIT'} 
  //   )
  //   handleEditCard(id)
  // }
  

return (
    <li className="card">
          <div className="account-name"><strong>{firstName}{lastName}</strong></div>   

          <img src={image} alt="account" />

          <div className="email"><strong>Email✉️: </strong> {email}</div>
          <div className="password"><strong>Password🔐: </strong> {password}</div>
        
        {/* <button onClick={editCard} className="emoji-button edit">📝</button> */}

    </li>
);
}