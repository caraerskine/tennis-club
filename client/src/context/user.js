import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loginError, setLoginError] = useState([]);
    const [signUpError, setSignUpError] = useState([]);
    const [opponents, setOpponents] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        fetchUser('/me', 'GET')
      }, []);

      const fetchUser = async (url, method, body = false) => {
        setLoginError([])
        setSignUpError([])
        // console.log("body", body)
        
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
            // console.log("data", data)
            setUser(data);
            navigate('/');
            //takes user to their home page with their avatar which is '/'
            //or should it take them to /matches

            // console.log("responseOkUser", data)
    
          } else if (response.status === 401) {

            let err = data.errors.map((e, i) => <li key={i}>{e}</li>)
            
            messages(url, err)

            // console.log("response401User", data)
          }

        // } else if (response.status === 401) {
        //   let err;
        //   if (Array.isArray(data.errors)) {
        //     err = data.errors.map((e, i) => <li key={i}>{e}</li>);
        //   } else {
        //     err = <li>{data.errors}</li>;
        //   }
          
        //   messages(url, err);
        //   console.log("response401User", data);
        // }
    
      } catch (error) {
     
          let message = [<li>Server Unresponsive</li>]
             
            messages(url, message)
            // console.log("catchBlock", error)
        }
      };

      //new below

      const fetchOpponentsData = async () => {
        if (user && user.opponents) {
          const opponentIds = user.opponents.map((opponent) => opponent.id);
          const opponentsAvatarsPromises = opponentIds.map((opponentId) =>
            fetch(`/users/${opponentId}`)
              .then((response) => response.json())
              .then((userData) => userData.avatar_url)
              .catch((error) => {
                console.error("Error fetching opponent avatar:", error);
                return null;
              })
          );
    
          const opponentsAvatars = await Promise.all(opponentsAvatarsPromises);
          setOpponents(opponentsAvatars);
        }
      };
    
      useEffect(() => {
        fetchOpponentsData();
      }, [user]);
    
//new above





  // console.log("user dot js", user)

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
            opponents
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };
