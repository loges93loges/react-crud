import React, { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = ({ onSubmit, selectedUser, setSelectedUser }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (selectedUser) {
      setUser({
        name: selectedUser.name,
        username: selectedUser.username,
        email: selectedUser.email,
        phone: selectedUser.phone
      });
    } else {
      setUser({
        name: '',
        username: '',
        email: '',
        phone: ''
      });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...user, id: selectedUser ? selectedUser.id : Date.now() });
    setUser({ name: '', username: '', email: '', phone: '' });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={user.name} 
        onChange={handleChange} 
        placeholder="Name" 
        required 
      />
      <input 
        type="text" 
        name="username" 
        value={user.username} 
        onChange={handleChange} 
        placeholder="Username" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        value={user.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required 
      />
      <input 
        type="text" 
        name="phone" 
        value={user.phone} 
        onChange={handleChange} 
        placeholder="Phone" 
        required 
      /><br/>
      <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button><br/>
      {selectedUser && <button type="button" onClick={() => setSelectedUser(null)}>Cancel</button>}
    </form>
  );
};

export default UserForm;


