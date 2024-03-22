import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile({userType}) {
  const [profile, setProfile] = useState(null);
    console.log(userType);
  useEffect(() => {
    // Fetch user profile
    axios.get('http://localhost:5000/profile', {
        params: {
            userType: userType
          },
      headers: {
        'Authorization': `Bearer ${userType==="seller"?localStorage.getItem('sellertoken'):localStorage.getItem('token')}` // Assuming the token is stored in local storage
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
