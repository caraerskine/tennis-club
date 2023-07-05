import React, { useState, useEffect } from 'react';

const MatchesContext = React.createContext();

function MatchesProvider({ children }){

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


   

    return (
        <MatchesContext.Provider 
            value={{
                matches, 
                setMatches
            }}
        >
            {children}
        </MatchesContext.Provider>
    );
}


export { MatchesContext, MatchesProvider };

//if this is a separate context, where do I get all my error handling, 
//do I import it again or do I not need a MatchContext and MatchProvider?