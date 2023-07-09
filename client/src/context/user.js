import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loginError, setLoginError] = useState([]);
    const [signUpError, setSignUpError] = useState([]);
    const [matches, setMatches] = useState([])
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
            //takes user to their home page with their avatar which is '/'
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

  const onEditMatch = (editedMatch) => {
    fetch(`/matches/${editedMatch.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedMatch),
    })
      .then((response) => response.json())
      .then((editedMatchData) => {
        if (editedMatchData.errors) {
          const errorLis = editedMatchData.errors.map((error) => <li>{error}</li>);
          setErrors(errorLis);
        } else {
          const newMatches = user.matches.map((match) => {
            if (match.id === editedMatch.id) {
              return editedMatchData;
            } else {
              return match;
            }
          });
          setUser({...user, matches: newMatches});
          alert("match updated!");
          setErrors([]);
        }
      });
  };
     
    
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
            setMatches,
            onEditMatch
          }}
        >
          {children}
        </UserContext.Provider>
      );
}

export { UserContext, UserProvider };
