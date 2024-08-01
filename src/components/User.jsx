import React from 'react';
import './User.css';

const User = ({ user, deleteUser, setEditingUser }) => {
  return (
    <div className="user">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={() => setEditingUser(user)}>Edit</button><br/>
      <button onClick={() => deleteUser(user.id)}>Delete</button>
    </div>
  );
};

export default User;
