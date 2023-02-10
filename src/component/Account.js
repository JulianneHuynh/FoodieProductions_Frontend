import React, { useState, useEffect } from 'react';

const Account = ({ userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      <img src={user.image} />
      <h1>Welcome {user.firstName} {user.lastName}!</h1>
      <p>Email: {user.email}</p>
    </div>
    // maybe have logout button here
  );
};

export default Account;




