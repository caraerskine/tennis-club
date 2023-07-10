import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './user';

const MatchesContext = React.createContext();

function MatchesProvider({ children }){

    //hit show all route and see who is logged in
    //if correct user load their matches

    const { user, setErrors, setUser } = useContext(UserContext);

    // useEffect(() => {
    //  fetch('/matches')
    //     .then(response => {
    //         if (response.ok){
    //          response.json().then(data => {
    //             setMatches(data)
    //         })
    //     } else {
    //         response.json().then(error => {
    //         })
    //     } 
    //     })
    // }, [])

console.log("user Obj", user)

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
          setUser(prevUser => {
            const updatedMatches = [...prevUser.matches || [], data];
            return { ...prevUser, matches: updatedMatches };
          });
          alert("Match added!");
          setErrors([]);
        }
      });
  };


// console.log("matches", matches)

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
        <MatchesContext.Provider 
            value={{
                // matches, 
                // setMatches,
                onEditMatch,
                onAddMatch
            }}
        >
            {children}
        </MatchesContext.Provider>
    );
}


export { MatchesContext, MatchesProvider };

//if this is a separate context, where do I get all my error handling, 
//do I import it again or do I not need a MatchContext and MatchProvider?

//load a user and hit matches
//matches would provide all the users matches via club match srlzr
//send the info to the front end as matches