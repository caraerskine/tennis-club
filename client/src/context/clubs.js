import React, { useState, useEffect } from 'react';

const ClubsContext = React.createContext();

function ClubsProvider({ children }){

    const [clubs, setClubs] = useState([])

    useEffect(() => {
     fetch('/clubs')
        .then(response => {
            if (response.ok){
             response.json().then(data => {
                setClubs(data)
            })
        } else {
            response.json().then(error => {
            })
        } 
        })
    }, [])

    return (
        <ClubsContext.Provider 
            value={{
                clubs, 
                setClubs
            }}
        >
            {children}
        </ClubsContext.Provider>
    );
}


export { ClubsContext, ClubsProvider };