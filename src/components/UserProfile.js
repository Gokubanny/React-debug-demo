import React, { useState } from 'react';

const UserProfile = ({ user, onUpdateAge }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempAge, setTempAge] = useState(user.age);

  // Fixed: Added user.age dependency to update tempAge when prop changes
  React.useEffect(() => {
    setTempAge(user.age);
  }, [user.age]); // Now includes user.age in dependency array

  const handleSave = () => {
    // Bug 4: Calling with wrong parameter name
    onUpdateAge(tempAge);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempAge(user.age);
    setIsEditing(false);
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <div>
        <strong>Age:</strong> 
        {isEditing ? (
          <div style={{ display: 'inline-block', marginLeft: '10px' }}>
            <input 
              type="number" 
              value={tempAge}
              onChange={(e) => setTempAge(parseInt(e.target.value))}
              style={{ width: '60px', marginRight: '10px' }}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
          </div>
        ) : (
          <span>
            {user.age} 
            <button 
              onClick={() => setIsEditing(true)}
              style={{ marginLeft: '10px' }}
            >
              Edit
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
