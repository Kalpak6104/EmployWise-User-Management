import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserCard.css';
import EditUserModal from './EditUserModal';

const UserCard = ({ user, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <div className="user-info">
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <p>{user.email}</p>
        <div className="user-actions">
          <button onClick={handleEditClick} className="edit-button">Edit</button>
          <button onClick={onDelete} className="delete-button">Delete</button>
        </div>
      </div>
      {isEditing && (
        <EditUserModal 
          user={user} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default UserCard;