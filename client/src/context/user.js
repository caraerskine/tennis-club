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
        console.log("body", body)
        
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
            //takes user to their home page with their avatar
            //or should it take them to /matches

            console.log("responseOkUser", data)
    
          } else if (response.status === 401) {
          
            let err = data.errors.map((e, i) => <li key={i}>{e}</li>)
            
            messages(url, err)

            console.log("response401User", data)
          }
    
      } catch (error) {
     
          let message = [<li>Server Unresponsive</li>]
             
            messages(url, message)
            console.log("catchBlock", error)
        }
      };

  
    const logout = () => {
        setUser(false)
      }

      const onAddMatch = (match) => {
        fetch("/matches", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(match),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.errors) {
              const errorLis = data.errors.map((e) => <li>{e}</li>);
              setErrors(errorLis);
            } else {
              // setUser({...user, matches: [...user.matches, data]})
              setUser(prevUser => {
                const updatedMatches = [...prevUser.matches || [], data];
                return { ...prevUser, matches: updatedMatches };
              });
              alert("Match added!");
              setErrors([]);
            }
          });
      };

      const [matches, setMatches] = useState([])

      useEffect(() => {
       fetch('/matches')
          .then(response => {
              if (response.ok){
               response.json().then(data => {
                  setMatches(data)
              })
          } else {
              response.json().then(error => {
              })
          } 
          })
      }, [])
  
  console.log("matches", matches)
     
    
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
            onAddMatch, 
            matches,
            setMatches
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };
