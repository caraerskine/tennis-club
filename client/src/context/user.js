import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const navigate = useNavigate()
    const [user, setUser] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loginError, setLoginError] = useState([]);
    const [signUpError, setSignUpError] = useState([]);

  

    //have a clubs context and a match context?
    //what would go in these? any fns related to each
    //separate concerns

    //user
    //fetchUser fn w/error handling
    //get for user

    //clubs
    //setClubs

    //match
    //editMatch
    //addNewMatch
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

    //   const messages = (url, err) => {
    //     if (url === "/signup"){
    //     setSignUpError(err)
    //   } else if (url === "/login") {
    //     setLoginError(err)
    //   }
    // } 
    
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
            //changes to /matches/pending or whatever
            //should matches be it's own page, and then on it are there buttons to see pending 
            //matches and accepted matches and a prompt to create a new match?
    
          } else if (response.status === 401) {
          
            let err = data.errors.map((e, i) => <li key={i}>{e}</li>)
            
            messages(url, err)
          }
    
      } catch (error) {
     
          let message = [<li>Server Unresponsive</li>]
             
            messages(url, message)
        }
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
            loginError,
            logout,
            // editMatch,
            errors,
            setErrors,
            setLoginError,
            setSignUpError,
            // addMatch,
            // clubs,
            // setClubs
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };