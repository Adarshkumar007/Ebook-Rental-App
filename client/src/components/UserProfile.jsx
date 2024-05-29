import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileImage from './MyComponent/ProfileImage';
import ProfileInput from './MyComponent/ProfileInput';
import SuccessButton from './MyComponent/SuccessButton';
import ProfileInputEmail from './MyComponent/ProfileInputEmail';
import Loading from './MyComponent/Loading'
import {url} from '../../src/url'; 

function UserProfile({userType}) {
  const [profile, setProfile] = useState(null);
  const [error ,setError] = useState(false);
  var x=0;
    console.log(userType);
  useEffect(() => {
    if(x===0){
    // Fetch user profile
    x++;
    axios.get(url+'/profile', {
        params: {
            userType: userType
          },
      headers: {
        'Authorization': `Bearer ${userType==="seller"?localStorage.getItem('sellertoken'):localStorage.getItem('token')}` 
      }
    })
    .then(response =>{ 
        setProfile(response.data);
        console.log("xc",response.data);

    })
    .catch(error =>{ 
      console.error('Error fetching profile:', error);
      setError(error);
      }
    );
  }
}, []);
  if (!profile) {
    return (
      <>
        {error ? <h3><div className="error" style={{ display:"flex",justifyContent:"center",alignItems:"center",color: "red"}}>{error.message}</div></h3> : <div><Loading/></div>}
      </>
    );
  }
  
  const handleSetFile = (file) =>{
    setProfile({
      ...profile,
      profile_image:file
    })
  }
  const handleSetUsername =(value) =>{
    console.log(value);
    setProfile({
      ...profile,
      username:value
    })
  }
  const handleSetEmail=(value) =>{
    setProfile({
      ...profile,
      email:value
    })
  } 
  const handleSetPhone=(value) =>{
    setProfile({
      ...profile,
      phone:value
    })
  } 
  const handleSetPin=(value) =>{
    setProfile({
      ...profile,
      pin:value
    })
  } 
  const handleSetAddress=(value) =>{
    setProfile({
      ...profile,
      address:value
    })
  } 

  const handleProfileClick = async () =>{
    const formData = new FormData();
  formData.append('username', profile.username);
  formData.append('email', profile.email);
  formData.append('password', profile.password);
  formData.append('address', profile.address);
  formData.append('pin', profile.pin);
  formData.append('phone', profile.phone);
  formData.append('userType',userType);
  if (profile.profile_image instanceof File) {
    formData.append('profile_image', profile.profile_image); 
  }
      try {
        const res = await axios.post(url+'/profileupdate', formData, {
          headers: {
            'Authorization': `Bearer ${userType==="seller" ? localStorage.getItem('sellertoken') : localStorage.getItem('token')}`
          }
        });
        console.log("update",res.data.message);
        setError(res.data.message);
      } catch (err) {
        setError(err.message);
      }
  }

  return (
    <div>
      {error && <div className="error" style={{ display:"flex",justifyContent:"center",alignItems:"center",color:"green"}}>{error}</div>}
      <ProfileImage image={profile.profile_image?profile.profile_image:""} handleSetFile={handleSetFile}/>

      <ProfileInputEmail value={profile.email} type="email" handleInput={handleSetEmail} label="Email" />
      <ProfileInput value={profile.username} type="text" handleInput={handleSetUsername} label="Username" />
      <ProfileInput value={profile.address} type="text" handleInput={handleSetAddress} label="Address" />
      <ProfileInput value={profile.pin} type="text" handleInput={handleSetPin} label="Pin" />
      <ProfileInput value={profile.phone} type="tel" handleInput={handleSetPhone} label="phone" />
      <div style={{
       display:'flex',
       margin:"10px",
       justifyContent:'center',
       alignItems:'center'}}>
      <SuccessButton myval="Save" onClick={handleProfileClick} style={{ backgroundColor: "green" }} />
      </div>
      {/* <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p> */}
    </div>
  );
}

export default UserProfile;
