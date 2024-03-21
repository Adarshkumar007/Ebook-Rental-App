import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile
    axios.get('http://localhost:5000/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming the token is stored in local storage
      }
    })
    .then(response =>{ 
        setProfile(response.data);
        console.log("xc",response.data);
    })
    .catch(error => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default UserProfile;
