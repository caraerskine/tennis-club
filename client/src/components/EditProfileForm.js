import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/user'
import { useNavigate, useParams } from 'react-router-dom'


function EditProfileForm() {
    const { id } = useParams()    
    console.log("id value:", id);  
    const {user, logout, errors, onEditProfile} = useContext(UserContext)
    const navigate = useNavigate()

const formObj = {
    name: "",
    avatar_url: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: ""
}


const [myProfile, setMyProfile] = useState(formObj)

useEffect(() => {
    if (id) {
      // Check if id is defined before fetching the user profile
      const currentUser = user.id === parseInt(id) ? user : null;
      setMyProfile(currentUser || formObj);
    } else {
      setMyProfile(formObj);
    }
  }, [user, id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("myProfile", myProfile)
    onEditProfile(myProfile)
}

function updateMyProfile(e){
    const { id, value } = e.target;
    setMyProfile({...myProfile, [id]: value})
}


console.log("typeof", typeof(user))

function handleDelete(e){
    e.preventDefault()
    fetch(`/users/${id}`, {
        method: "DELETE",
    })
    .then(response => {
        if (response.ok){
              // Remove the profile from the user object
            const updatedUser = { ...user };
            delete updatedUser[id];
            // setUser(updatedUser);
            logout();
            alert("Profile deleted!");
            setTimeout(navigate("/about"), 1000)
            // let updatedProfile = user.filter((user) => {
            //     return user.id != id
            // })
            // setUser(updatedProfile);
            // alert("profile deleted!");
            // navigate(`/`);
            // setUser(null); // Set the user object to null
            // alert("Profile deleted!");
            // navigate(`/`);
        } else {
            // Handle non-successful response
            console.log("Profile delete failed. Status:", response.status);
          }
        })
        .catch(error => {
          console.error("Profile delete error:", error);
        });
      }

//only upon refresh does it go to below
      if (!user){
        return <h3>Please sign-up to join NYC🎾TC</h3>
    } 
    
    if (myProfile === null) {
        return <p>Loading...</p>
    }

  return (
    <form onSubmit={handleSubmit}>
                <p>Edit profile</p>
                <label>Name: </label>
                <input 
                    type="text"
                    id="name"
                    value={myProfile.name}
                    onChange={updateMyProfile}
                    placeholder="Name"  
                /> 
                <br/>
                <br/>
                <label>Avatar: </label>
                <input
                    type="text"
                    id="avatar_url"
                    value={myProfile.avatar_url}
                    onChange={updateMyProfile}
                    placeholder="https://..." 
                /> 
                <br/>
                <br/>    
                <label>Username:</label>
                <input 
                      type="text"
                      id="username"
                      value={myProfile.username}
                      onChange={updateMyProfile}
                      placeholder="Type in here..."
                />
                <br/>
                <br/>
                <label>Email:</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="example@test.com…"
                    value={myProfile.email} 
                    onChange={updateMyProfile}
                />
                <br></br>
                <br></br>
                <label>Password:</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="8-20 characters…"
                    value={myProfile.password} 
                    onChange={updateMyProfile}
                />
          <br></br>
          <br></br>
                <label>Confirm Password:</label>
                <input 
                    type="password" 
                    id="password_confirmation"
                    placeholder="passwords must match"
                    value={myProfile.password_confirmation} 
                    onChange={updateMyProfile}
          />
          <br></br>
          <br></br>
          <div>Checking...</div>
          <br></br>
                <button type="submit">Save edited profile</button>
                <br></br>
                <br></br>
                {/* <button onClick={handleDelete}>Delete profile</button> */}
                <button onClick={handleDelete}>Delete profile</button>
                 
                
                {errors.map((error, index) => (
                <p key={index} className="errors">
                  {error}
                </p>
                ))}
            </form>
  )
}

export default EditProfileForm