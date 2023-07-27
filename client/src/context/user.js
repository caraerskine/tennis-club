import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loginError, setLoginError] = useState([]);
    const [signUpError, setSignUpError] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        fetchUser('/me', 'GET')
      }, []);

      const fetchUser = async (url, method, body = false) => {
        setLoginError([])
        setSignUpError([])
        
        const messages = (url, err) => {
          if (url === "/login"){
          setLoginError(err)
        } else if (url === "/signup") {
          setSignUpError(err)
        }
      }     
        try {
          const options = {
            method: method,
            headers: {
              'Content-Type': 'application/json',
            },
          };
    
          if (body) {
            options.body = JSON.stringify(body);
          }
    
          const response = await fetch(url, options);
          const data = await response.json();
         
    
          if (response.ok) {
            setUser(data);
            navigate('/');
    
          } else if (response.status === 401) {

            let err = data.errors.map((e, i) => <li key={i}>{e}</li>)
            
            messages(url, err)

            
          }
    
      } catch (error) {
     
          let message = [<li>Server Unresponsive</li>]
            messages(url, message)
        }
      };

    
  
const onEditProfile = (editedProfile) => {
  console.log("editedProfile from onEditProfile", editedProfile)
fetch(`/users/${editedProfile.id}`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(editedProfile),
})
  .then((response) => response.json())
  .then((editedProfileData) => {
    console.log("editedProfileData", editedProfileData)
    if (editedProfileData.errors) {
      const errorLis = editedProfileData.errors.map((error) => <li>{error}</li>);
      setErrors(errorLis);
    } else {
      setUser(editedProfileData)
      alert("profile updated!");
      setErrors([]);
      setTimeout(navigate("/"), 1000)
    }
  });
};


    const logout = () => {
        setUser(false)
      }


    return (
        <UserContext.Provider
          value={{
            user,
            setUser,
            fetchUser,
            signUpError,
            setSignUpError,
            loginError,
            setLoginError,
            errors,
            setErrors,
            logout,
            onEditProfile
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };
