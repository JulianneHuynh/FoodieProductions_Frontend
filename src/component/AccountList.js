import React from "react";
import AccountCard from "./AccountCard";


export default function AccountList({users}) {
  console.log(users)
  const userCard= users.map((user)=> {
    return (
    <AccountCard
    key={user.id}
    id={user.id}
    firstName={user.firstName}
    lastName={user.lastName}
    image={user.image}
    email={user.email}
    password={user.password}
    // handleEditCard={handleEditCard}
    />
    )
  })
  return (
    <div className="account-cards">
      <li className="cards">{userCard}</li>
    </div>
  );
}
