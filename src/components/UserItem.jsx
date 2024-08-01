import React from 'react';

const UserItem = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user-item">
      <div>
        <strong>{user.name}</strong>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      <div>
        <button onClick={() => onEdit(user)}>Edit</button><br/>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
};

export default UserItem;



